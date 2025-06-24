// const dropboxService = require('../services/dropboxService');
const dropboxService = require('../services/dropboxService');
require('dotenv').config();

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