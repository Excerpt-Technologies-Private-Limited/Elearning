// const dropboxService = require('../services/dropboxService');
const axios = require('axios');
require('dotenv').config();
const dropboxService = require('../services/dropboxService');


// Existing: Get videos for a specific course/module
exports.getCourseModuleVideos = async (req, res) => {
    try {
        const { course, module } = req.params;
        const base = process.env.DROPBOX_ROOT_PATH || '';
        const path = `${base}/${course}/${module}`;
        const videos = await dropboxService.getVideoLinks(path);
        res.json({ videos });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// New: Get all content for a course
exports.getCourseContent = async (req, res) => {
    try {
        const { course } = req.params;
        console.log("Fetching content for course:", course);
        const content = await dropboxService.getCourseContent(course);
        res.json({ content });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
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

exports.refreshToken = async (req, res) => {
    console.log("Received request to refresh access token");
    try {
        console.log("Refreshing access token...");
        const token = await refreshAccessToken();
        res.json({ token });
    } catch (err) {
        console.error('Refresh Access Token Error:', err);
        res.status(500).json({ error: 'Failed to refresh access token' });
    }
};