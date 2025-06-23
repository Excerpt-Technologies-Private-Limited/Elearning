const axios = require('axios');
require('dotenv').config();

let accessToken = null;
let tokenExpiresAt = 0;

async function refreshAccessToken() {
    if (accessToken && Date.now() < tokenExpiresAt - 60000) {
        return accessToken;
    }
    try {
        const resp = await axios.post('https://api.dropbox.com/oauth2/token', null, {
            params: {
                grant_type: 'refresh_token',
                refresh_token: process.env.DROPBOX_REFRESH_TOKEN,
                client_id: process.env.DROPBOX_CLIENT_ID,
                client_secret: process.env.DROPBOX_CLIENT_SECRET,
            },
        });
        if (resp.status !== 200) {
            throw new Error("Failed to refresh access token: " + resp.statusText);
        }
        accessToken = resp.data.access_token;
        tokenExpiresAt = Date.now() + (resp.data.expires_in * 1000);
        return accessToken;
    } catch (error) {
        // Axios errors have .response with details if available
        if (error.response) {
            console.error("Dropbox token refresh error response:", error.response.data);
        } else {
            console.error("Error refreshing Dropbox access token:", error.message);
        }
        throw error;
    }
}




async function listFolder(path) {
    const token = await refreshAccessToken();
    const resp = await axios.post('https://api.dropboxapi.com/2/files/list_folder', { path }, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    return resp.data.entries;
}

async function getVideoLinks(path) {
    const files = await listFolder(path);
    const videoFiles = files.filter(file =>
        file['.tag'] === 'file' &&
        /\.(mp4|mov|avi|mkv)$/i.test(file.name)
    );
    const token = await refreshAccessToken();
    return await Promise.all(videoFiles.map(async file => {
        const resp = await axios.post('https://api.dropboxapi.com/2/files/get_temporary_link', {
            path: file.path_lower,
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return {
            name: file.name,
            link: resp.data.link,
        };
    }));
}

// New: Get all modules and their videos for a course
async function getCourseContent(course) {
    const root = process.env.DROPBOX_ROOT_PATH || '';
    const coursePath = `/${course}`;
    if (!course) {
        throw new Error("Course name is required");
    }
    const entries = await listFolder(coursePath);
    if (!entries || entries.length === 0) {
        throw new Error(`No content found for course: ${course}`);
    }
    // Modules are folders
    const modules = entries.filter(entry => entry['.tag'] === 'folder');
    let result = {};
    for (let mod of modules) {
        const moduleName = mod.name;
        const modulePath = mod.path_lower;
        const videos = await getVideoLinks(modulePath);
        result[moduleName] = videos;
    }
    console.log("Course content fetched:", result);
    return result;
}

module.exports = {
    getVideoLinks,
    getCourseContent,
};