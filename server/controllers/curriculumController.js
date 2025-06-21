
const Curriculum = require('../models/CurriculumSchema');
const { v4: uuidv4 } = require('uuid');

// Add or update curriculum modules (with Dropbox integration)
exports.addCurriculum = async (req, res) => {
  try {
    const { coursecode } = req.body;
    console.log("course",coursecode)
    const modulesData = typeof req.body.modules === 'string'
  ? JSON.parse(req.body.modules)
  : (req.body.modules || []);
   
    // Find existing curriculum to get the last module ID
    let nextModuleId = 1;
    const existingCurriculum = await Curriculum.findOne({ coursecode });
    
    if (existingCurriculum && existingCurriculum.modules.length > 0) {
      // Get all existing modules and convert moduleId to number if it's a string
      const allExistingModules = existingCurriculum.modules.map(module => ({
        ...module.toObject(),
        moduleId: parseInt(module.moduleId, 10) || 0
      }));
      
      // Count how many modules exist to determine next ID
      nextModuleId = allExistingModules.length + 1;
      
      console.log('Next module ID calculated:', nextModuleId);
    }
    
    // Process uploaded files and associate them with modules
    const uploadedFiles = req.files || [];
    const modules = modulesData.map((module, moduleIndex) => {
      // Always use the calculated next module ID + index
      const moduleId = nextModuleId + moduleIndex;
      
      // Find files associated with this module
      const moduleVideos = uploadedFiles.filter(file =>
        file.fieldname.startsWith(modules`[${moduleIndex}][videos]`)
      );
     
      // Extract file paths
      const videoPaths = moduleVideos.map(file => file.path);
     
      return {
        moduleId: moduleId, // Always provide numerical ID
        courseMode: module.courseMode,
        moduleName: module.moduleName,
        title: module.title,
        description: module.description,
        videos: videoPaths  // Save the file paths
      };
    });
    
    console.log('Processed modules with video paths:', modules);
    
    // Check if curriculum already exists
    if (existingCurriculum) {
      // Append new modules to the existing curriculum
      existingCurriculum.modules.push(...modules);
      await existingCurriculum.save();
      res.status(200).json({ message: "Modules added to existing curriculum", curriculum: existingCurriculum });
    } else {
      // Create new curriculum
      const curriculum = new Curriculum({ coursecode, modules });
      await curriculum.save();
      res.status(201).json({ message: "New curriculum created", curriculum });
    }
  } catch (error) {
    console.error("Error saving curriculum:", error);
    res.status(500).json({ error: "Failed to save curriculum", details: error.message });
  }
};
// Get curriculum for a specific course
exports.getCurriculum = async (req, res) => {
  try {
    const { coursecode } = req.params;
    
    if (!coursecode) {
      return res.status(400).json({
        error: "Course code is required"
      });
    }
    
    const curriculum = await Curriculum.findOne({ coursecode });
    
    if (curriculum) {
      // Sort modules by moduleId for consistent ordering
      const sortedModules = curriculum.modules.sort((a, b) => {
        return parseInt(a.moduleId, 10) - parseInt(b.moduleId, 10);
      });
      
      res.status(200).json({ 
        curriculum: {
          ...curriculum.toObject(),
          modules: sortedModules
        }
      });
    } else {
      res.status(200).json({ 
        curriculum: { 
          coursecode, 
          modules: [] 
        } 
      });
    }
  } catch (error) {
    console.error("Error fetching curriculum:", error);
    res.status(500).json({
      error: "Failed to fetch curriculum",
      details: error.message
    });
  }
};

// Get next available module ID for a course
exports.getNextModuleId = async (req, res) => {
  try {
    const { coursecode } = req.params;
    
    if (!coursecode) {
      return res.status(400).json({
        error: "Course code is required"
      });
    }
    
    const curriculum = await Curriculum.findOne({ coursecode });
    
    let nextModuleId = 1;
    
    if (curriculum && curriculum.modules.length > 0) {
      // Get the highest module ID
      const moduleIds = curriculum.modules.map(module => parseInt(module.moduleId, 10) || 0);
      const maxModuleId = Math.max(...moduleIds);
      nextModuleId = maxModuleId + 1;
    }
    
    res.status(200).json({
      nextModuleId,
      existingModuleCount: curriculum ? curriculum.modules.length : 0
    });
    
  } catch (error) {
    console.error("Error getting next module ID:", error);
    res.status(500).json({
      error: "Failed to get next module ID",
      details: error.message
    });
  }
};

// Update a specific module
exports.updateModule = async (req, res) => {
  try {
    const { coursecode, moduleId } = req.params;
    const updateData = req.body;
    
    const curriculum = await Curriculum.findOne({ coursecode });
    
    if (!curriculum) {
      return res.status(404).json({
        error: "Curriculum not found"
      });
    }
    
    const moduleIndex = curriculum.modules.findIndex(
      module => parseInt(module.moduleId, 10) === parseInt(moduleId, 10)
    );
    
    if (moduleIndex === -1) {
      return res.status(404).json({
        error: "Module not found"
      });
    }
    
    // Update the module
    curriculum.modules[moduleIndex] = {
      ...curriculum.modules[moduleIndex].toObject(),
      ...updateData,
      moduleId: parseInt(moduleId, 10) // Ensure moduleId remains unchanged
    };
    
    await curriculum.save();
    
    res.status(200).json({
      message: "Module updated successfully",
      module: curriculum.modules[moduleIndex]
    });
    
  } catch (error) {
    console.error("Error updating module:", error);
    res.status(500).json({
      error: "Failed to update module",
      details: error.message
    });
  }
};

// Delete a specific module
exports.deleteModule = async (req, res) => {
  try {
    const { coursecode, moduleId } = req.params;
    
    const curriculum = await Curriculum.findOne({ coursecode });
    
    if (!curriculum) {
      return res.status(404).json({
        error: "Curriculum not found"
      });
    }
    
    const initialLength = curriculum.modules.length;
    curriculum.modules = curriculum.modules.filter(
      module => parseInt(module.moduleId, 10) !== parseInt(moduleId, 10)
    );
    
    if (curriculum.modules.length === initialLength) {
      return res.status(404).json({
        error: "Module not found"
      });
    }
    
    await curriculum.save();
    
    res.status(200).json({
      message: "Module deleted successfully",
      remainingModules: curriculum.modules.length
    });
    
  } catch (error) {
    console.error("Error deleting module:", error);
    res.status(500).json({
      error: "Failed to delete module",
      details: error.message
    });
  }
};

// Optional: Get shared link for a Dropbox video (if needed for viewing)
exports.getVideoLink = async (req, res) => {
  try {
    const { videoPath } = req.params;
    
    // You can implement Dropbox shared link generation here if needed
    // This would require additional Dropbox API calls
    
    res.status(200).json({
      message: "Video link endpoint - implement shared link generation if needed",
      videoPath: decodeURIComponent(videoPath)
    });
  } catch (error) {
    console.error("Error getting video link:", error);
    res.status(500).json({
      error: "Failed to get video link",
      details: error.message
    });
  }
};