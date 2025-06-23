// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CurriculumModal = ({ course, onClose }) => {
//   const coursecode = course?._id;
//   const [modules, setModules] = useState([]);
//   const [nextModuleId, setNextModuleId] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch existing modules and determine the next module ID
//   useEffect(() => {
//     const fetchExistingCurriculum = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`/api/curriculum/${coursecode}`);
        
//         if (response.data && response.data.curriculum) {
//           const existingModules = response.data.curriculum.modules || [];
          
//           if (existingModules.length > 0) {
//             // Simply use the count of existing modules + 1 for the next ID
//             const nextId = existingModules.length + 1;
//             setNextModuleId(nextId);
//             console.log(`Found ${existingModules.length} existing modules. Next ID will be ${nextId}`);
//           }
//         }
        
//         // Only create the first module after we've determined the next ID
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching curriculum:", error);
//         setIsLoading(false);
//       }
//     };
    
//     fetchExistingCurriculum();
//   }, [coursecode]);

//   // Create the first module after determining the next ID
// useEffect(() => {
//   if (!isLoading && modules.length === 0) {
//     setModules([
//       { 
//         moduleId: nextModuleId, 
//         courseMode: 'Pre-recorded', 
//         moduleName: '', 
//         title: '', 
//         videos: [], 
//         description: '' 
//       }
//     ]);
//   }
// }, [isLoading, nextModuleId]);

//   const handleModuleChange = (index, field, value) => {
//     const updatedModules = [...modules];
//     updatedModules[index][field] = value;
//     setModules(updatedModules);
//   };

//   const handleVideoUpload = (index, files) => {
//     const updatedModules = [...modules];
//     updatedModules[index].videos = Array.from(files);
//     setModules(updatedModules);
//   };

//   const addModule = () => {
//     const newModuleId = nextModuleId + 1;
//     setNextModuleId(newModuleId);
    
//     setModules([
//       ...modules, 
//       { 
//         moduleId: newModuleId, 
//         courseMode: 'Pre-recorded', 
//         moduleName: '', 
//         title: '', 
//         videos: [], 
//         description: '' 
//       }
//     ]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData();
//     formData.append('coursecode', coursecode);
    
//     // Convert modules array to JSON string
//     // Ensure moduleId is stored as a number, not a string
//     formData.append('modules', JSON.stringify(
//       modules.map(mod => ({
//         moduleId: Number(mod.moduleId),  // Ensure moduleId is a number
//         courseMode: mod.courseMode,
//         moduleName: mod.moduleName,
//         title: mod.title,
//         description: mod.description
//       }))
//     ));

//     // Append videos separately with field names that indicate which module they belong to
//     modules.forEach((mod, index) => {
//       if (mod.videos && mod.videos.length) {
//         mod.videos.forEach((video, videoIndex) => {
//           formData.append(`modules[${index}][videos]`, video);
//         });
//       }
//     });

//     try {
//       const response = await axios.post('/api/curriculum', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('Curriculum saved successfully:', response.data);
//       onClose();
//     } catch (error) {
//       console.error('Error saving curriculum:', error);
//       alert('Failed to save curriculum. Please try again.');
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white p-6 rounded w-full max-w-3xl text-center">
//           <p>Loading curriculum data...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded w-full max-w-3xl overflow-y-auto max-h-[90vh]">
//         <h2 className="text-xl font-bold mb-4">Add Curriculum</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {modules.map((mod, index) => (
//             <div key={index} className="border p-4 rounded space-y-3">
//               <div className="font-semibold text-gray-700 mb-2">Module {mod.moduleId}</div>
//               <select
//                 value={mod.courseMode}
//                 onChange={(e) => handleModuleChange(index, 'courseMode', e.target.value)}
//                 className="w-full border p-2"
//               >
//                 <option value="Pre-recorded">Pre-recorded</option>
//                 <option value="Live">Live</option>
//               </select>
//               <input
//                 type="text"
//                 placeholder="Module Name"
//                 className="w-full border p-2"
//                 value={mod.moduleName}
//                 onChange={(e) => handleModuleChange(index, 'moduleName', e.target.value)}
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Title"
//                 className="w-full border p-2"
//                 value={mod.title}
//                 onChange={(e) => handleModuleChange(index, 'title', e.target.value)}
//               />
//               <input
//                 type="file"
//                 multiple
//                 accept="video/*"
//                 onChange={(e) => handleVideoUpload(index, e.target.files)}
//                 className="w-full"
//               />
//               <div className="text-sm text-gray-500">
//                 {mod.videos.length > 0 ? `${mod.videos.length} videos selected` : "No videos selected"}
//               </div>
//               <textarea
//                 placeholder="Description"
//                 className="w-full border p-2"
//                 value={mod.description}
//                 onChange={(e) => handleModuleChange(index, 'description', e.target.value)}
//               />
//             </div>
//           ))}

//           <div className="flex justify-between">
//             <button type="button" onClick={addModule} className="bg-green-500 text-dark px-4 py-2 rounded">
//               + Add Module
//             </button>
//             <button type="submit" className="bg-blue-500 text-dark px-4 py-2 rounded">
//               Save Curriculum
//             </button>
//           </div>
//         </form>
//         <button onClick={onClose} className="absolute top-4 right-4 text-xl font-bold">&times;</button>
//       </div>
//     </div>
//   );
// };

// export default CurriculumModal;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Dropbox } from 'dropbox';

// const DROPBOX_ACCESS_TOKEN = 'sl.u.AFwjHKWhcLBeJXM65dTa1903PkYIhpmt6yiK-OJzYT1JAYrdTF-KtXddUVZTjN-Z4NyBdQISQ6HzgXua5j5Iw2gwkKkl_b5TLxGxRHitylddiBrxQRuQIAnwLBHvS63wGeA8pgOmv8WvPPE7NBhzWxUMsMQfUgVeuXlidAyNTnT2U5LK533VdPFHo8AyjmerSIVvSU_lAWsQKl5KnTLthDhFqKqMGWvm-TUhr8lOqUZt_bQVNmEcXHbwdux72kNXBSWpQ4rszj71VFSJiRy5q69gQVrIJ6V3Wlbn_BNHl6e0ESDRDC5zbXhZU4j9z_HWVBPXbIH85Xm_k58eUr3GHSZ4YJNwYbfTlWyKNtiYVjKmbZU5i1nn9lU1otDoqUsgp8JJ8sUASbQVYHJ9UHTBldyVQBbra-QDs7uem3l42DpqHBVBGqQBZvSzqMpFKiSrh1rh4J2hnD2M2QkLoMgdJVzJ-YwPa10Qbs_hHtTl1afO2yE0gxuYndENb-vrneV4waMNcJ1JUIYvkdQlxinZdPuXv4oYPcO-sQ8wuqACJ9DyqsmH-VzOO3rFMkZXdVqcSwxmnbqMtK6JGS8W-Ls2AMP9e0LgORtjY5jQdO2mUJ26F-9Ef8qbl6qACNe-uD-vB1rViqh-L8cpaDe5e6NlevMbtmNSv3QipZ2amRJhS9oYRUJU-FRMOCggWqh5uFgdNojRepSEPmVWN7kQkIPMTSzy5glSAwZLI6RXvuW_lwvzhDBY_-09kdg-Yz5RjuQFfScEX1Af2xL1DsWgWcToV_4kUvxkgnhM8jBKG8khCpnOnlaswmWZZCA6jQC1B7WTcAUC8bT6gX2010R4SZ0uUC1HCFxlbwisnojA_Epc7dDqHlvc3a6O8JpXkWcepsd0Z4Sk8t1YmC_jbbJfPiTwPORZEcjWU8RqiH2Vyi536dM2No3kGTjj9I1nOlzlV2iK32S7L3My1Fy5SHPbi-tGq41hoVD6UHbLJeIfmmJ0CFybKV5teWGKzhrejTbQDQUyJJ9nxsKi7QjBQFEa9DbCcggUq0oqjuMYxU6PmO2zJ06NDZF1DMccEh_aDcTDW-AE2oMCMXIsfjEYak49G4ESybPrYdMmJIMB52OuFG-bbQtSJFfSEUiVZY6-vANguNsIjSS3fYrP_0kdAIWRxi-Kn0OsGka8b_il3hfqbiqE95d7tTVCju_lJDpK7soFmQVwKdaAN9gv3f0FWc2ZNsjUMEzhxN6nbJgHCYi1R1nwQD0LgNSyP_bioKZ2EXK7NxWLaJMKVJF9BP8ceFhLx6XLhdDHnXlsbrfMDAVcJ18r7HbA5dA_5pxH4YNr7f_gQ7vuipKRcxo271AYdmIUPsEhXXDtCe4e2WyWY15yLTfeP_bfqtqE_ucN99OdtnXevHp6YX4KxRbdnk-u0dq4cF66XLgYk_PwqmbkPVnZZ45XJOHEPg';

// const CurriculumModal = ({ course, onClose }) => {
//   const coursecode = course?._id;
//   const coursename = course?.courseName || 'Unknown Course'; // Get course name
//   const [modules, setModules] = useState([]);
//   const [nextModuleId, setNextModuleId] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);
//   const [uploadingVideos, setUploadingVideos] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState({});

//   const dbx = new Dropbox({ accessToken: DROPBOX_ACCESS_TOKEN });

//   // Fetch existing modules and determine the next module ID
//   useEffect(() => {
//     const fetchExistingCurriculum = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`/api/curriculum/${coursecode}`);
        
//         if (response.data && response.data.curriculum) {
//           const existingModules = response.data.curriculum.modules || [];
          
//           if (existingModules.length > 0) {
//             const nextId = existingModules.length + 1;
//             setNextModuleId(nextId);
//             console.log(`Found ${existingModules.length} existing modules. Next ID will be ${nextId}`);
//           }
//         }
        
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching curriculum:", error);
//         setIsLoading(false);
//       }
//     };
    
//     fetchExistingCurriculum();
//   }, [coursecode]);

//   // Create the first module after determining the next ID
//   useEffect(() => {
//     if (!isLoading && modules.length === 0) {
//       setModules([
//         { 
//           moduleId: nextModuleId, 
//           courseMode: 'Pre-recorded', 
//           moduleName: '', 
//           title: '', 
//           videos: [], 
//           description: '' 
//         }
//       ]);
//     }
//   }, [isLoading, nextModuleId]);

//   const handleModuleChange = (index, field, value) => {
//     const updatedModules = [...modules];
//     updatedModules[index][field] = value;
//     setModules(updatedModules);
//   };

//   const handleVideoUpload = (index, files) => {
//     const updatedModules = [...modules];
//     updatedModules[index].videos = Array.from(files);
//     setModules(updatedModules);
//   };

//   const addModule = () => {
//     const newModuleId = nextModuleId + 1;
//     setNextModuleId(newModuleId);
    
//     setModules([
//       ...modules, 
//       { 
//         moduleId: newModuleId, 
//         courseMode: 'Pre-recorded', 
//         moduleName: '', 
//         title: '', 
//         videos: [], 
//         description: '' 
//       }
//     ]);
//   };

//   // Upload videos to Dropbox
//   const uploadVideosToDropbox = async (moduleVideos, moduleId) => {
//     const uploadedVideoPaths = [];
    
//     for (let i = 0; i < moduleVideos.length; i++) {
//       const video = moduleVideos[i];
//       const fileName = `${video.name}`;
//       const dropboxPath = `/${coursename}/Module_${moduleId}/${fileName}`;
      
//       try {
//         setUploadProgress(prev => ({
//           ...prev,
//           [moduleId]: `Uploading video ${i + 1}/${moduleVideos.length}: ${video.name}`
//         }));

//         const response = await dbx.filesUpload({
//           path: dropboxPath,
//           contents: video,
//           mode: 'add',
//           autorename: true,
//           mute: false,
//         });

//         uploadedVideoPaths.push(response.result.path_display);
//         console.log(`Uploaded: ${response.result.name} to ${response.result.path_display}`);
        
//       } catch (error) {
//         console.error(`Error uploading ${video.name}:`, error);
//         throw new Error(`Failed to upload ${video.name}: ${error.message}`);
//       }
//     }
    
//     return uploadedVideoPaths;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       setUploadingVideos(true);
//       setUploadProgress({});

//       // Process modules and upload videos to Dropbox
//       const processedModules = [];
      
//       for (const mod of modules) {
//         let videoPaths = [];
        
//         if (mod.videos && mod.videos.length > 0) {
//           videoPaths = await uploadVideosToDropbox(mod.videos, mod.moduleId);
//         }

//         processedModules.push({
//           moduleId: Number(mod.moduleId),
//           courseMode: mod.courseMode,
//           moduleName: mod.moduleName,
//           title: mod.title,
//           description: mod.description,
//           videos: videoPaths // Store Dropbox paths
//         });

//         setUploadProgress(prev => ({
//           ...prev,
//           [mod.moduleId]: 'Completed'
//         }));
//       }

//       // Send processed data to backend
//       const response = await axios.post('/api/curriculum', {
//         coursecode,
//         modules: processedModules
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       console.log('Curriculum saved successfully:', response.data);
//       alert('Curriculum saved successfully!');
//       onClose();
      
//     } catch (error) {
//       console.error('Error saving curriculum:', error);
//       alert(`Failed to save curriculum: ${error.message}`);
//     } finally {
//       setUploadingVideos(false);
//       setUploadProgress({});
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white p-6 rounded w-full max-w-3xl text-center">
//           <p>Loading curriculum data...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded w-full max-w-3xl overflow-y-auto max-h-[90vh]">
//         <h2 className="text-xl font-bold mb-4">Add Curriculum - {coursename}</h2>
        
//         {uploadingVideos && (
//           <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">
//             <p className="font-semibold text-blue-800">Uploading videos to Dropbox...</p>
//             {Object.entries(uploadProgress).map(([moduleId, status]) => (
//               <p key={moduleId} className="text-sm text-blue-600">
//                 Module {moduleId}: {status}
//               </p>
//             ))}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {modules.map((mod, index) => (
//             <div key={index} className="border p-4 rounded space-y-3">
//               <div className="font-semibold text-gray-700 mb-2">Module {mod.moduleId}</div>
//               <select
//                 value={mod.courseMode}
//                 onChange={(e) => handleModuleChange(index, 'courseMode', e.target.value)}
//                 className="w-full border p-2"
//                 disabled={uploadingVideos}
//               >
//                 <option value="Pre-recorded">Pre-recorded</option>
//                 <option value="Live">Live</option>
//               </select>
//               <input
//                 type="text"
//                 placeholder="Module Name"
//                 className="w-full border p-2"
//                 value={mod.moduleName}
//                 onChange={(e) => handleModuleChange(index, 'moduleName', e.target.value)}
//                 required
//                 disabled={uploadingVideos}
//               />
//               <input
//                 type="text"
//                 placeholder="Title"
//                 className="w-full border p-2"
//                 value={mod.title}
//                 onChange={(e) => handleModuleChange(index, 'title', e.target.value)}
//                 disabled={uploadingVideos}
//               />
//               <input
//                 type="file"
//                 multiple
//                 accept="video/*"
//                 onChange={(e) => handleVideoUpload(index, e.target.files)}
//                 className="w-full"
//                 disabled={uploadingVideos}
//               />
//               <div className="text-sm text-gray-500">
//                 {mod.videos.length > 0 ? `${mod.videos.length} videos selected` : "No videos selected"}
//                 {uploadingVideos && uploadProgress[mod.moduleId] && (
//                   <div className="mt-1 text-blue-600">{uploadProgress[mod.moduleId]}</div>
//                 )}
//               </div>
//               <textarea
//                 placeholder="Description"
//                 className="w-full border p-2"
//                 value={mod.description}
//                 onChange={(e) => handleModuleChange(index, 'description', e.target.value)}
//                 disabled={uploadingVideos}
//               />
//             </div>
//           ))}

//           <div className="flex justify-between">
//             <button 
//               type="button" 
//               onClick={addModule} 
//               className="bg-green-500 text-dark px-4 py-2 rounded disabled:bg-gray-400"
//               disabled={uploadingVideos}
//             >
//               + Add Module
//             </button>
//             <button 
//               type="submit" 
//               className="bg-blue-500 text-dark px-4 py-2 rounded disabled:bg-gray-400"
//               disabled={uploadingVideos}
//             >
//               {uploadingVideos ? 'Uploading...' : 'Save Curriculum'}
//             </button>
//           </div>
//         </form>
//         <button 
//           onClick={onClose} 
//           className="absolute top-4 right-4 text-xl font-bold"
//           disabled={uploadingVideos}
//         >
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CurriculumModal;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Dropbox } from 'dropbox';

// const DROPBOX_ACCESS_TOKEN = 'sl.u.AFwjHKWhcLBeJXM65dTa1903PkYIhpmt6yiK-OJzYT1JAYrdTF-KtXddUVZTjN-Z4NyBdQISQ6HzgXua5j5Iw2gwkKkl_b5TLxGxRHitylddiBrxQRuQIAnwLBHvS63wGeA8pgOmv8WvPPE7NBhzWxUMsMQfUgVeuXlidAyNTnT2U5LK533VdPFHo8AyjmerSIVvSU_lAWsQKl5KnTLthDhFqKqMGWvm-TUhr8lOqUZt_bQVNmEcXHbwdux72kNXBSWpQ4rszj71VFSJiRy5q69gQVrIJ6V3Wlbn_BNHl6e0ESDRDC5zbXhZU4j9z_HWVBPXbIH85Xm_k58eUr3GHSZ4YJNwYbfTlWyKNtiYVjKmbZU5i1nn9lU1otDoqUsgp8JJ8sUASbQVYHJ9UHTBldyVQBbra-QDs7uem3l42DpqHBVBGqQBZvSzqMpFKiSrh1rh4J2hnD2M2QkLoMgdJVzJ-YwPa10Qbs_hHtTl1afO2yE0gxuYndENb-vrneV4waMNcJ1JUIYvkdQlxinZdPuXv4oYPcO-sQ8wuqACJ9DyqsmH-VzOO3rFMkZXdVqcSwxmnbqMtK6JGS8W-Ls2AMP9e0LgORtjY5jQdO2mUJ26F-9Ef8qbl6qACNe-uD-vB1rViqh-L8cpaDe5e6NlevMbtmNSv3QipZ2amRJhS9oYRUJU-FRMOCggWqh5uFgdNojRepSEPmVWN7kQkIPMTSzy5glSAwZLI6RXvuW_lwvzhDBY_-09kdg-Yz5RjuQFfScEX1Af2xL1DsWgWcToV_4kUvxkgnhM8jBKG8khCpnOnlaswmWZZCA6jQC1B7WTcAUC8bT6gX2010R4SZ0uUC1HCFxlbwisnojA_Epc7dDqHlvc3a6O8JpXkWcepsd0Z4Sk8t1YmC_jbbJfPiTwPORZEcjWU8RqiH2Vyi536dM2No3kGTjj9I1nOlzlV2iK32S7L3My1Fy5SHPbi-tGq41hoVD6UHbLJeIfmmJ0CFybKV5teWGKzhrejTbQDQUyJJ9nxsKi7QjBQFEa9DbCcggUq0oqjuMYxU6PmO2zJ06NDZF1DMccEh_aDcTDW-AE2oMCMXIsfjEYak49G4ESybPrYdMmJIMB52OuFG-bbQtSJFfSEUiVZY6-vANguNsIjSS3fYrP_0kdAIWRxi-Kn0OsGka8b_il3hfqbiqE95d7tTVCju_lJDpK7soFmQVwKdaAN9gv3f0FWc2ZNsjUMEzhxN6nbJgHCYi1R1nwQD0LgNSyP_bioKZ2EXK7NxWLaJMKVJF9BP8ceFhLx6XLhdDHnXlsbrfMDAVcJ18r7HbA5dA_5pxH4YNr7f_gQ7vuipKRcxo271AYdmIUPsEhXXDtCe4e2WyWY15yLTfeP_bfqtqE_ucN99OdtnXevHp6YX4KxRbdnk-u0dq4cF66XLgYk_PwqmbkPVnZZ45XJOHEPg';

// const CurriculumModal = ({ course, onClose }) => {
//   const coursecode = course?._id;
//   const coursename = course?.courseName || 'Unknown Course';
//   const [modules, setModules] = useState([]);
//   const [nextModuleId, setNextModuleId] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);
//   const [uploadingVideos, setUploadingVideos] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState({});

//   const dbx = new Dropbox({ accessToken: DROPBOX_ACCESS_TOKEN });

//   // Fetch existing modules and determine the next module ID
//   useEffect(() => {
//     const fetchExistingCurriculum = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`/api/curriculum/${coursecode}`);
        
//         if (response.data && response.data.curriculum && response.data.curriculum.modules) {
//           const existingModules = response.data.curriculum.modules;
          
//           if (existingModules.length > 0) {
//             // Get the highest module ID from existing modules
//             const maxModuleId = Math.max(...existingModules.map(module => 
//               parseInt(module.moduleId, 10) || 0
//             ));
//             const nextId = maxModuleId + 1;
//             setNextModuleId(nextId);
//             console.log(`Found ${existingModules.length} existing modules. Highest module ID: ${maxModuleId}. Next ID will be ${nextId}`);
//           } else {
//             setNextModuleId(1);
//             console.log('No existing modules found. Starting with module ID 1');
//           }
//         } else {
//           setNextModuleId(1);
//           console.log('No curriculum found. Starting with module ID 1');
//         }
        
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching curriculum:", error);
//         setNextModuleId(1); // Default to 1 if there's an error
//         setIsLoading(false);
//       }
//     };
    
//     if (coursecode) {
//       fetchExistingCurriculum();
//     }
//   }, [coursecode]);

//   // Create the first module after determining the next ID
//   useEffect(() => {
//     if (!isLoading && modules.length === 0) {
//       setModules([
//         { 
//           moduleId: nextModuleId, 
//           courseMode: 'Pre-recorded', 
//           moduleName: '', 
//           title: '', 
//           videos: [], 
//           description: '' 
//         }
//       ]);
//     }
//   }, [isLoading, nextModuleId]);

//   const handleModuleChange = (index, field, value) => {
//     const updatedModules = [...modules];
//     updatedModules[index][field] = value;
//     setModules(updatedModules);
//   };

//   const handleVideoUpload = (index, files) => {
//     const updatedModules = [...modules];
//     updatedModules[index].videos = Array.from(files);
//     setModules(updatedModules);
//   };

//   const addModule = () => {
//     // Calculate the next module ID based on current modules
//     const currentMaxId = Math.max(...modules.map(module => module.moduleId), 0);
//     const newModuleId = currentMaxId + 1;
    
//     setModules([
//       ...modules, 
//       { 
//         moduleId: newModuleId, 
//         courseMode: 'Pre-recorded', 
//         moduleName: '', 
//         title: '', 
//         videos: [], 
//         description: '' 
//       }
//     ]);
    
//     console.log(`Added new module with ID: ${newModuleId}`);
//   };

//   const removeModule = (indexToRemove) => {
//     if (modules.length > 1) {
//       const updatedModules = modules.filter((_, index) => index !== indexToRemove);
//       setModules(updatedModules);
//     }
//   };

//   // Upload videos to Dropbox
//   const uploadVideosToDropbox = async (moduleVideos, moduleId) => {
//     const uploadedVideoPaths = [];
    
//     for (let i = 0; i < moduleVideos.length; i++) {
//       const video = moduleVideos[i];
//       const fileName = `${video.name}`;
//       const dropboxPath = `/${coursename}/Module_${moduleId}/${fileName}`;
      
//       try {
//         setUploadProgress(prev => ({
//           ...prev,
//           [moduleId]: `Uploading video ${i + 1}/${moduleVideos.length}: ${video.name}`
//         }));

//         const response = await dbx.filesUpload({
//           path: dropboxPath,
//           contents: video,
//           mode: 'add',
//           autorename: true,
//           mute: false,
//         });

//         uploadedVideoPaths.push(response.result.path_display);
//         console.log(`Uploaded: ${response.result.name} to ${response.result.path_display}`);
        
//       } catch (error) {
//         console.error(`Error uploading ${video.name}:`, error);
//         throw new Error(`Failed to upload ${video.name}: ${error.message}`);
//       }
//     }
    
//     return uploadedVideoPaths;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate required fields
//     const invalidModules = modules.filter(mod => !mod.moduleName.trim());
//     if (invalidModules.length > 0) {
//       alert('Please fill in all module names before saving.');
//       return;
//     }
    
//     try {
//       setUploadingVideos(true);
//       setUploadProgress({});

//       // Process modules and upload videos to Dropbox
//       const processedModules = [];
      
//       for (const mod of modules) {
//         let videoPaths = [];
        
//         if (mod.videos && mod.videos.length > 0) {
//           videoPaths = await uploadVideosToDropbox(mod.videos, mod.moduleId);
//         }

//         processedModules.push({
//           moduleId: Number(mod.moduleId),
//           courseMode: mod.courseMode,
//           moduleName: mod.moduleName,
//           title: mod.title,
//           description: mod.description,
//           videos: videoPaths // Store Dropbox paths
//         });

//         setUploadProgress(prev => ({
//           ...prev,
//           [mod.moduleId]: 'Completed'
//         }));
//       }

//       // Send processed data to backend
//       const response = await axios.post('/api/curriculum', {
//         coursecode,
//         modules: processedModules
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       console.log('Curriculum saved successfully:', response.data);
//       alert('Curriculum saved successfully!');
//       onClose();
      
//     } catch (error) {
//       console.error('Error saving curriculum:', error);
//       alert(`Failed to save curriculum: ${error.message}`);
//     } finally {
//       setUploadingVideos(false);
//       setUploadProgress({});
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white p-6 rounded w-full max-w-3xl text-center">
//           <div className="flex items-center justify-center space-x-2">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//             <p>Loading curriculum data...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded w-full max-w-4xl overflow-y-auto max-h-[90vh]">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Add Curriculum - {coursename}</h2>
//           <button 
//             onClick={onClose} 
//             className="text-2xl font-bold text-gray-500 hover:text-gray-700"
//             disabled={uploadingVideos}
//           >
//             &times;
//           </button>
//         </div>
        
//         {uploadingVideos && (
//           <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">
//             <p className="font-semibold text-blue-800">Uploading videos to Dropbox...</p>
//             {Object.entries(uploadProgress).map(([moduleId, status]) => (
//               <p key={moduleId} className="text-sm text-blue-600">
//                 Module {moduleId}: {status}
//               </p>
//             ))}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {modules.map((mod, index) => (
//             <div key={`module-${mod.moduleId}`} className="border p-4 rounded space-y-3 bg-gray-50">
//               <div className="flex justify-between items-center mb-2">
//                 <div className="font-semibold text-gray-700">Module {mod.moduleId}</div>
//                 {modules.length > 1 && (
//                   <button
//                     type="button"
//                     onClick={() => removeModule(index)}
//                     className="text-red-500 hover:text-red-700 font-bold"
//                     disabled={uploadingVideos}
//                   >
//                     Remove
//                   </button>
//                 )}
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 <select
//                   value={mod.courseMode}
//                   onChange={(e) => handleModuleChange(index, 'courseMode', e.target.value)}
//                   className="w-full border p-2 rounded"
//                   disabled={uploadingVideos}
//                 >
//                   <option value="Pre-recorded">Pre-recorded</option>
//                   <option value="Live">Live</option>
//                 </select>
                
//                 <input
//                   type="text"
//                   placeholder="Module Name *"
//                   className="w-full border p-2 rounded"
//                   value={mod.moduleName}
//                   onChange={(e) => handleModuleChange(index, 'moduleName', e.target.value)}
//                   required
//                   disabled={uploadingVideos}
//                 />
//               </div>
              
//               <input
//                 type="text"
//                 placeholder="Title"
//                 className="w-full border p-2 rounded"
//                 value={mod.title}
//                 onChange={(e) => handleModuleChange(index, 'title', e.target.value)}
//                 disabled={uploadingVideos}
//               />
              
//               <input
//                 type="file"
//                 multiple
//                 accept="video/*"
//                 onChange={(e) => handleVideoUpload(index, e.target.files)}
//                 className="w-full border p-2 rounded"
//                 disabled={uploadingVideos}
//               />
              
//               <div className="text-sm text-gray-500">
//                 {mod.videos.length > 0 ? `${mod.videos.length} videos selected` : "No videos selected"}
//                 {uploadingVideos && uploadProgress[mod.moduleId] && (
//                   <div className="mt-1 text-blue-600 font-semibold">{uploadProgress[mod.moduleId]}</div>
//                 )}
//               </div>
              
//               <textarea
//                 placeholder="Description"
//                 className="w-full border p-2 rounded"
//                 rows="3"
//                 value={mod.description}
//                 onChange={(e) => handleModuleChange(index, 'description', e.target.value)}
//                 disabled={uploadingVideos}
//               />
//             </div>
//           ))}

//           <div className="flex justify-between items-center pt-4">
//             <button 
//               type="button" 
//               onClick={addModule} 
//               className="bg-green-500 hover:bg-green-600 text-dark px-6 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
//               disabled={uploadingVideos}
//             >
//               + Add Module
//             </button>
//             <button 
//               type="submit" 
//               className="bg-blue-500 hover:bg-blue-600 text-dark px-6 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
//               disabled={uploadingVideos}
//             >
//               {uploadingVideos ? 'Uploading...' : 'Save Curriculum'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CurriculumModal;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropbox } from 'dropbox';

let DROPBOX_ACCESS_TOKEN = ''
const CurriculumModal = ({ course, onClose, mode = 'add' }) => {
  const coursecode = course?._id;
  const coursename = course?.courseName || 'Unknown Course';
  const [modules, setModules] = useState([]);
  const [existingModules, setExistingModules] = useState([]);
  const [nextModuleId, setNextModuleId] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadingVideos, setUploadingVideos] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [activeMode, setActiveMode] = useState(mode);
  const [editingModule, setEditingModule] = useState(null);
  const [moduleToDelete, setModuleToDelete] = useState(null);

  
  useEffect(() => {
    const fetchDropboxAccessToken = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/videos/course/refresh-token');
        DROPBOX_ACCESS_TOKEN = response.data.token  ;
        console.log('Dropbox access token refreshed', DROPBOX_ACCESS_TOKEN);
      } catch (error) {
        console.error('Error fetching Dropbox access token:', error);
      }
    };
    fetchDropboxAccessToken();
  }, []);
  
  const dbx = new Dropbox({ accessToken: DROPBOX_ACCESS_TOKEN });




  // Fetch existing modules and determine the next module ID
  useEffect(() => {
    const fetchExistingCurriculum = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:8080/api/curriculum/${coursecode}`);
        
        if (response.data && response.data.curriculum && response.data.curriculum.modules) {
          const existingMods = response.data.curriculum.modules;
          setExistingModules(existingMods);
          
          if (existingMods.length > 0) {
            const maxModuleId = Math.max(...existingMods.map(module => 
              parseInt(module.moduleId, 10) || 0
            ));
            const nextId = maxModuleId + 1;
            setNextModuleId(nextId);
            console.log(`Found ${existingMods.length} existing modules. Next ID will be ${nextId}`);
          } else {
            setNextModuleId(1);
          }
        } else {
          setExistingModules([]);
          setNextModuleId(1);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching curriculum:", error);
        setNextModuleId(1);
        setExistingModules([]);
        setIsLoading(false);
      }
    };
    
    if (coursecode) {
      fetchExistingCurriculum();
    }
  }, [coursecode]);

  // Initialize modules for add mode
  useEffect(() => {
    if (!isLoading && activeMode === 'add' && modules.length === 0) {
      setModules([
        { 
          moduleId: nextModuleId, 
          courseMode: 'Pre-recorded', 
          moduleName: '', 
          title: '', 
          videos: [], 
          description: '',
          isNew: true
        }
      ]);
    }
  }, [isLoading, nextModuleId, activeMode]);

  const handleModeChange = (newMode) => {
    setActiveMode(newMode);
    setModules([]);
    setEditingModule(null);
    setModuleToDelete(null);
  };

  const handleModuleChange = (index, field, value) => {
    const updatedModules = [...modules];
    updatedModules[index][field] = value;
    setModules(updatedModules);
  };

  const handleVideoUpload = (index, files) => {
    const updatedModules = [...modules];
    updatedModules[index].videos = Array.from(files);
    updatedModules[index].newVideos = Array.from(files); // Mark as new videos
    setModules(updatedModules);
  };

  const addModule = () => {
    const currentMaxId = Math.max(
      ...modules.map(module => module.moduleId), 
      ...existingModules.map(module => parseInt(module.moduleId, 10) || 0),
      0
    );
    const newModuleId = currentMaxId + 1;
    
    setModules([
      ...modules, 
      { 
        moduleId: newModuleId, 
        courseMode: 'Pre-recorded', 
        moduleName: '', 
        title: '', 
        videos: [], 
        description: '',
        isNew: true
      }
    ]);
  };

  const removeModule = (indexToRemove) => {
    if (modules.length > 1) {
      const updatedModules = modules.filter((_, index) => index !== indexToRemove);
      setModules(updatedModules);
    }
  };

  const startEditModule = (module) => {
    setEditingModule({ ...module, originalVideos: module.videos || [] });
    setActiveMode('edit');
  };

  const cancelEdit = () => {
    setEditingModule(null);
    setActiveMode('view');
  };

  const confirmDelete = (module) => {
    setModuleToDelete(module);
  };

  const cancelDelete = () => {
    setModuleToDelete(null);
  };

 const deleteVideosFromDropbox = async (videos, moduleId) => {
    const errors = [];
    
    for (const videoPath of videos) {
      try {
        console.log(`Attempting to delete video: ${videoPath}`);
        await dbx.filesDeleteV2({ path: videoPath });
        console.log(`Successfully deleted: ${videoPath}`);
      } catch (error) {
        console.error(`Error deleting ${videoPath}:`, error);
        errors.push({ path: videoPath, error: error.message });
      }
    }
    
    // Try to delete the module folder if it exists
    try {
      const moduleFolderPath = `/${coursename}/Module_${moduleId}`;
      console.log(`Attempting to delete module folder: ${moduleFolderPath}`);
      await dbx.filesDeleteV2({ path: moduleFolderPath });
      console.log(`Successfully deleted module folder: ${moduleFolderPath}`);
    } catch (error) {
      console.log(`Module folder deletion failed (may already be empty): ${error.message}`);
    }
    
    return errors;
  };

  const executeDelete = async () => {
    if (!moduleToDelete) return;
    
    try {
      // setDeleting(true);
      setUploadProgress(prev => ({
        ...prev,
        [moduleToDelete.moduleId]: 'Deleting videos...'
      }));

      // Delete videos from Dropbox first
      if (moduleToDelete.videos && moduleToDelete.videos.length > 0) {
        const deleteErrors = await deleteVideosFromDropbox(moduleToDelete.videos, moduleToDelete.moduleId);
        
        if (deleteErrors.length > 0) {
          console.warn('Some videos could not be deleted from Dropbox:', deleteErrors);
          // Continue with database deletion even if some Dropbox deletions failed
        }
      }

      setUploadProgress(prev => ({
        ...prev,
        [moduleToDelete.moduleId]: 'Removing from database...'
      }));

      // Delete module from database
      await axios.delete(`http://localhost:8080/api/curriculum/${coursecode}/module/${moduleToDelete.moduleId}`);
      
      setUploadProgress(prev => ({
        ...prev,
        [moduleToDelete.moduleId]: 'Refreshing data...'
      }));

      // Refresh existing modules
      const response = await axios.get(`http://localhost:8080/api/curriculum/${coursecode}`);
      if (response.data && response.data.curriculum && response.data.curriculum.modules) {
        setExistingModules(response.data.curriculum.modules);
      } else {
        setExistingModules([]);
      }
      
      setUploadProgress(prev => ({
        ...prev,
        [moduleToDelete.moduleId]: 'Completed'
      }));

      setModuleToDelete(null);
      alert('Module and associated videos deleted successfully!');
      
      // Clear progress after a delay
      setTimeout(() => {
        setUploadProgress(prev => {
          const newProgress = { ...prev };
          delete newProgress[moduleToDelete?.moduleId];
          return newProgress;
        });
      }, 2000);
      
    } catch (error) {
      console.error('Error deleting module:', error);
      alert(`Failed to delete module: ${error.response?.data?.details || error.message}`);
      setUploadProgress(prev => ({
        ...prev,
        [moduleToDelete.moduleId]: 'Error occurred'
      }));
    } finally {
      setDeleting(false);
    }
  };

  // Upload videos to Dropbox
 

  // Upload videos to Dropbox
  const uploadVideosToDropbox = async (moduleVideos, moduleId) => {
    const uploadedVideoPaths = [];
    
    for (let i = 0; i < moduleVideos.length; i++) {
      const video = moduleVideos[i];
      const fileName = `${video.name}`;
      const dropboxPath = `/${coursename}/Module_${moduleId}/${fileName}`;
      
      try {
        setUploadProgress(prev => ({
          ...prev,
          [moduleId]: `Uploading video ${i + 1}/${moduleVideos.length}: ${video.name}`
        }));

        const response = await dbx.filesUpload({
          path: dropboxPath,
          contents: video,
          mode: 'add',
          autorename: true,
          mute: false,
        });

        uploadedVideoPaths.push(response.result.path_display);
        console.log(`Uploaded: ${response.result.name} to ${response.result.path_display}`);
        
      } catch (error) {
        console.error(`Error uploading ${video.name}:`, error);
        throw new Error(`Failed to upload ${video.name}: ${error.message}`);
      }
    }
    
    return uploadedVideoPaths;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (activeMode === 'add') {
      await handleAddSubmit();
    } else if (activeMode === 'edit') {
      await handleEditSubmit();
    }
  };

  const handleAddSubmit = async () => {
    const invalidModules = modules.filter(mod => !mod.moduleName.trim());
    if (invalidModules.length > 0) {
      alert('Please fill in all module names before saving.');
      return;
    }
    
    try {
      setUploadingVideos(true);
      setUploadProgress({});

      const processedModules = [];
      
      for (const mod of modules) {
        let videoPaths = [];
        
        if (mod.videos && mod.videos.length > 0) {
          videoPaths = await uploadVideosToDropbox(mod.videos, mod.moduleId);
        }

        processedModules.push({
          moduleId: Number(mod.moduleId),
          courseMode: mod.courseMode,
          moduleName: mod.moduleName,
          title: mod.title,
          description: mod.description,
          videos: videoPaths
        });

        setUploadProgress(prev => ({
          ...prev,
          [mod.moduleId]: 'Completed'
        }));
      }

      const response = await axios.post('http://localhost:8080/api/curriculum', {
        coursecode,
        modules: processedModules
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Curriculum saved successfully:', response.data);
      alert('Curriculum saved successfully!');
      onClose();
      
    } catch (error) {
      console.error('Error saving curriculum:', error);
      alert(`Failed to save curriculum: ${error.message}`);
    } finally {
      setUploadingVideos(false);
      setUploadProgress({});
    }
  };

  const handleEditSubmit = async () => {
    if (!editingModule.moduleName.trim()) {
      alert('Please fill in the module name.');
      return;
    }

    try {
      setUploadingVideos(true);
      setUploadProgress({});

      let videoPaths = editingModule.originalVideos || [];

      // Upload new videos if any
      if (editingModule.newVideos && editingModule.newVideos.length > 0) {
        const newVideoPaths = await uploadVideosToDropbox(editingModule.newVideos, editingModule.moduleId);
        videoPaths = [...videoPaths, ...newVideoPaths];
      }

      const updateData = {
        courseMode: editingModule.courseMode,
        moduleName: editingModule.moduleName,
        title: editingModule.title,
        description: editingModule.description,
        videos: videoPaths
      };

      setUploadProgress(prev => ({
        ...prev,
        [editingModule.moduleId]: 'Updating...'
      }));

      await axios.put(`http://localhost:8080/api/curriculum/${coursecode}/module/${editingModule.moduleId}`, updateData);

      // Refresh existing modules
      const response = await axios.get(`http://localhost:8080/api/curriculum/${coursecode}`);
      if (response.data && response.data.curriculum && response.data.curriculum.modules) {
        setExistingModules(response.data.curriculum.modules);
      }

      setUploadProgress(prev => ({
        ...prev,
        [editingModule.moduleId]: 'Completed'
      }));

      alert('Module updated successfully!');
      setEditingModule(null);
      setActiveMode('view');
      
    } catch (error) {
      console.error('Error updating module:', error);
      alert(`Failed to update module: ${error.message}`);
    } finally {
      setUploadingVideos(false);
      setUploadProgress({});
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded w-full max-w-3xl text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p>Loading curriculum data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-5xl overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Curriculum Management - {coursename}</h2>
          {/* <button 
            onClick={onClose} 
            className="text-2xl font-bold text-gray-500 hover:text-gray-700"
            disabled={uploadingVideos}
          >
            &times;
          </button> */}
        </div>

       
        <div className="nav justify-content-end nav-tabs-custom rounded card-header-tabs">

          <div class="nav-item">
          <button
            onClick={() => handleModeChange('view')}
            className={`px-4 py-2 font-semibold ${activeMode === 'view' ? 'nav-link active' : 'text-gray-600'}`}
            disabled={uploadingVideos}
          >
            View Modules ({existingModules.length})
          </button>
          </div>

          <div class="nav-item">
          <button
            onClick={() => handleModeChange('add')}
            className={`px-4 py-2 font-semibold ${activeMode === 'add' ? 'nav-link active' : 'text-gray-600'}`}
            disabled={uploadingVideos}
          >
            Add New Modules
          </button>
          </div>
          
        </div>

        {uploadingVideos && (
          <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">
            <p className="font-semibold text-blue-800">Processing...</p>
            {Object.entries(uploadProgress).map(([moduleId, status]) => (
              <p key={moduleId} className="text-sm text-blue-600">
                Module {moduleId}: {status}
              </p>
            ))}
          </div>
        )}

      
        {activeMode === 'view' && (
  <div className="container-fluid">
    <div className="row">
      {existingModules.length === 0 ? (
        <div className="col-12 text-center py-5 text-muted">
          <p>No modules found for this course.</p>
          <button
            onClick={() => handleModeChange('add')}
            className="btn btn-link text-primary"
          >
            Add your first module
          </button>
        </div>
      ) : (
        existingModules.map((module) => (
          <div key={module.moduleId} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <h5 className="card-title">
                      Module {module.moduleId}: {module.moduleName}
                    </h5>
                    <p className="text-muted">{module.courseMode}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => startEditModule(module)}
                       className="btn btn-soft-success waves-effect waves-light m-1"
                      disabled={uploadingVideos}
                    >
                       <i className="bx bx-edit"></i> 
                    </button>
                    <button
                      onClick={() => confirmDelete(module)}
                      className="btn btn-soft-danger waves-effect waves-light"
                      disabled={uploadingVideos}
                    >
                      <i className="bx bx-trash"></i>
                    </button>
                  </div>
                </div>

                {module.title && (
                  <p className="mb-2"><strong>Title:</strong> {module.title}</p>
                )}

                {module.description && (
                  <p className="mb-2"><strong>Description:</strong> {module.description}</p>
                )}

                {module.videos && module.videos.length > 0 && (
                  <div className="mt-auto">
                    <p className="fw-semibold">Videos ({module.videos.length}):</p>
                    <ul className="list-unstyled small text-muted mb-0">
                      {module.videos.map((video, index) => (
                        <li key={index}>
                          <i className="bi bi-play-circle me-1"></i>
                          {video.split('/').pop()}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
)}


     
        {/* {activeMode === 'edit' && editingModule && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border p-4 rounded space-y-3 bg-yellow-50">
              <div className="font-semibold text-gray-700 mb-2">
                Editing Module {editingModule.moduleId}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <select
                  value={editingModule.courseMode}
                  onChange={(e) => setEditingModule({...editingModule, courseMode: e.target.value})}
                  className="w-full border p-2 rounded"
                  disabled={uploadingVideos}
                >
                  <option value="Pre-recorded">Pre-recorded</option>
                  <option value="Live">Live</option>
                </select>
                
                <input
                  type="text"
                  placeholder="Module Name *"
                  className="w-full border p-2 rounded"
                  value={editingModule.moduleName}
                  onChange={(e) => setEditingModule({...editingModule, moduleName: e.target.value})}
                  required
                  disabled={uploadingVideos}
                />
              </div>
              
              <input
                type="text"
                placeholder="Title"
                className="w-full border p-2 rounded"
                value={editingModule.title}
                onChange={(e) => setEditingModule({...editingModule, title: e.target.value})}
                disabled={uploadingVideos}
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Add New Videos (existing videos will be kept)
                </label>
                <input
                  type="file"
                  multiple
                  accept="video/*"
                  onChange={(e) => setEditingModule({...editingModule, newVideos: Array.from(e.target.files)})}
                  className="w-full border p-2 rounded"
                  disabled={uploadingVideos}
                />
                {editingModule.newVideos && editingModule.newVideos.length > 0 && (
                  <p className="text-sm text-green-600 mt-1">
                    {editingModule.newVideos.length} new videos selected
                  </p>
                )}
              </div>
              
              {editingModule.originalVideos && editingModule.originalVideos.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Existing Videos ({editingModule.originalVideos.length}):
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {editingModule.originalVideos.map((video, index) => (
                      <li key={index}>{video.split('/').pop()}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <textarea
                placeholder="Description"
                className="w-full border p-2 rounded"
                rows="3"
                value={editingModule.description}
                onChange={(e) => setEditingModule({...editingModule, description: e.target.value})}
                disabled={uploadingVideos}
              />
            </div>

            <div className="flex justify-between items-center pt-4">
              <button 
                type="button" 
                onClick={cancelEdit}
                className="bg-gray-500 hover:bg-gray-600 text-dark px-6 py-2 rounded"
                disabled={uploadingVideos}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-dark px-6 py-2 rounded disabled:bg-gray-400"
                disabled={uploadingVideos}
              >
                {uploadingVideos ? 'Updating...' : 'Update Module'}
              </button>
            </div>
          </form>
        )} */}

{activeMode === 'edit' && editingModule && (
  <form onSubmit={handleSubmit}>
    <div className="card border-primary mb-4">
      <div className="card-header bg-primary text-white fw-semibold">
        Editing Module {editingModule.moduleId}
      </div>

      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Course Mode</label>
            <select
              value={editingModule.courseMode}
              onChange={(e) => setEditingModule({ ...editingModule, courseMode: e.target.value })}
              className="form-select"
              disabled={uploadingVideos}
            >
              <option value="Pre-recorded">Pre-recorded</option>
              <option value="Live">Live</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Module Name *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Module Name"
              value={editingModule.moduleName}
              onChange={(e) => setEditingModule({ ...editingModule, moduleName: e.target.value })}
              required
              disabled={uploadingVideos}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              value={editingModule.title}
              onChange={(e) => setEditingModule({ ...editingModule, title: e.target.value })}
              disabled={uploadingVideos}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Add New Videos</label>
            <input
              type="file"
              multiple
              accept="video/*"
              onChange={(e) =>
                setEditingModule({ ...editingModule, newVideos: Array.from(e.target.files) })
              }
              className="form-control"
              disabled={uploadingVideos}
            />
            {editingModule.newVideos && editingModule.newVideos.length > 0 && (
              <div className="form-text text-success fw-semibold mt-1">
                {editingModule.newVideos.length} new video(s) selected
              </div>
            )}
          </div>

          {editingModule.originalVideos && editingModule.originalVideos.length > 0 && (
            <div className="col-12">
              <label className="form-label">Existing Videos ({editingModule.originalVideos.length})</label>
              <ul className="list-group">
                {editingModule.originalVideos.map((video, index) => (
                  <li key={index} className="list-group-item small">
                    {video.split('/').pop()}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="col-12">
            <label className="form-label">Description</label>
            <textarea
              rows="3"
              className="form-control"
              placeholder="Description"
              value={editingModule.description}
              onChange={(e) => setEditingModule({ ...editingModule, description: e.target.value })}
              disabled={uploadingVideos}
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <div className="d-flex justify-content-between">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={cancelEdit}
        disabled={uploadingVideos}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={uploadingVideos}
      >
        {uploadingVideos ? 'Updating...' : 'Update Module'}
      </button>
    </div>
  </form>
)}

  
        {/* {activeMode === 'add' && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {modules.map((mod, index) => (
              <div key={`module-${mod.moduleId}`} className="border p-4 rounded space-y-3 bg-green-50">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold text-gray-700">Module {mod.moduleId} (New)</div>
                  {modules.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeModule(index)}
                      className="text-red-500 hover:text-red-700 font-bold"
                      disabled={uploadingVideos}
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <select
                    value={mod.courseMode}
                    onChange={(e) => handleModuleChange(index, 'courseMode', e.target.value)}
                    className="w-full border p-2 rounded"
                    disabled={uploadingVideos}
                  >
                    <option value="Pre-recorded">Pre-recorded</option>
                    <option value="Live">Live</option>
                  </select>
                  
                  <input
                    type="text"
                    placeholder="Module Name *"
                    className="w-full border p-2 rounded"
                    value={mod.moduleName}
                    onChange={(e) => handleModuleChange(index, 'moduleName', e.target.value)}
                    required
                    disabled={uploadingVideos}
                  />
                </div>
                
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full border p-2 rounded"
                  value={mod.title}
                  onChange={(e) => handleModuleChange(index, 'title', e.target.value)}
                  disabled={uploadingVideos}
                />
                
                <input
                  type="file"
                  multiple
                  accept="video/*"
                  onChange={(e) => handleVideoUpload(index, e.target.files)}
                  className="w-full border p-2 rounded"
                  disabled={uploadingVideos}
                />
                
                <div className="text-sm text-gray-500">
                  {mod.videos.length > 0 ? `${mod.videos.length} videos selected` : "No videos selected"}
                  {uploadingVideos && uploadProgress[mod.moduleId] && (
                    <div className="mt-1 text-blue-600 font-semibold">{uploadProgress[mod.moduleId]}</div>
                  )}
                </div>
                
                <textarea
                  placeholder="Description"
                  className="w-full border p-2 rounded"
                  rows="3"
                  value={mod.description}
                  onChange={(e) => handleModuleChange(index, 'description', e.target.value)}
                  disabled={uploadingVideos}
                />
              </div>
            ))}

            <div className="flex justify-between items-center pt-4">
              <button 
                type="button" 
                onClick={addModule} 
                className="bg-green-500 hover:bg-green-600 text-dark px-6 py-2 rounded disabled:bg-gray-400"
                disabled={uploadingVideos}
              >
                + Add Another Module
              </button>
              <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-dark px-6 py-2 rounded disabled:bg-gray-400"
                disabled={uploadingVideos}
              >
                {uploadingVideos ? 'Saving...' : 'Save New Modules'}
              </button>
            </div>
          </form>
        )} */}

        {activeMode === 'add' && (
  <form onSubmit={handleSubmit}>
    {modules.map((mod, index) => (
      <div key={`module-${mod.moduleId}`} className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Module {mod.moduleId} (New)</h5>
          {modules.length > 1 && (
            <button
              type="button"
              onClick={() => removeModule(index)}
              className="btn btn-soft-danger waves-effect waves-light"
              disabled={uploadingVideos}
            >
              <i className="bx bx-trash"></i>
            </button>
          )}
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Course Mode</label>
              <select
                value={mod.courseMode}
                onChange={(e) => handleModuleChange(index, 'courseMode', e.target.value)}
                className="form-select"
                disabled={uploadingVideos}
              >
                <option value="Pre-recorded">Pre-recorded</option>
                <option value="Live">Live</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Module Name *</label>
              <input
                type="text"
                className="form-control"
                placeholder='Module Name'
                value={mod.moduleName}
                onChange={(e) => handleModuleChange(index, 'moduleName', e.target.value)}
                required
                disabled={uploadingVideos}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Title</label>
              <input
                type="text"
                placeholder='Title'
                className="form-control"
                value={mod.title}
                onChange={(e) => handleModuleChange(index, 'title', e.target.value)}
                disabled={uploadingVideos}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Upload Videos</label>
              <input
                type="file"
                multiple
                accept="video/*"
                onChange={(e) => handleVideoUpload(index, e.target.files)}
                className="form-control"
                disabled={uploadingVideos}
              />
              <div className="form-text">
                {mod.videos.length > 0 ? `${mod.videos.length} videos selected` : 'No videos selected'}
                {uploadingVideos && uploadProgress[mod.moduleId] && (
                  <div className="text-primary fw-bold">{uploadProgress[mod.moduleId]}</div>
                )}
              </div>
            </div>

            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea
                rows="3"
                className="form-control"
                placeholder='Description'
                value={mod.description}
                onChange={(e) => handleModuleChange(index, 'description', e.target.value)}
                disabled={uploadingVideos}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    ))}

    <div className="d-flex justify-content-between pt-3">
      <button
        type="button"
        onClick={addModule}
        className="btn btn-success"
        disabled={uploadingVideos}
      >
        + Add Another Module
      </button>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={uploadingVideos}
      >
        {uploadingVideos ? 'Saving...' : 'Save New Modules'}
      </button>
    </div>
  </form>
)}


      
        {moduleToDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-60">
            <div className="bg-white p-6 rounded max-w-md w-full mx-4">
              <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
              <p className="mb-4">
                Are you sure you want to delete Module {moduleToDelete.moduleId}: "{moduleToDelete.moduleName}"?
              </p>
              <p className="text-sm text-red-600 mb-4">
                This action cannot be undone and will also remove all associated videos from Dropbox.
              </p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={cancelDelete}
                  className="bg-gray-500 hover:bg-gray-600 text-dark px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={executeDelete}
                  className="bg-red-500 hover:bg-red-600 text-dark px-4 py-2 rounded"
                >
                  Delete Module
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>

    </>
  );
};

export default CurriculumModal;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Dropbox } from 'dropbox';

// const DROPBOX_ACCESS_TOKEN = 'sl.u.AFzTcbZ6B3Ke946An2yKa3zxRohmHLBWqnzJYkELJ8dNAnxfij6PeToeSSiLmYhb81UyMvPO4DquE201trjfrwcqXkeoy6Ti5zUkvIZi7mapEAcD7Y60k11rr0KiOZSbw_z4pG_62AjfXw43HeR1ZUH8yXhkZQHeQb8roEyYtIK_bSgzFTK25mr_medqZRv6d4YGwwG8K4MYrEdCpztsvEXARj4Wdnxlcvj2Uv8EUq3tooKiDNSIMW2_ogxkiXeH8-GCB3fgA2rhadlw3GwnuNvmiLR8rYbm21km1XE_Ur6YsU87HPSRwnRHEQUXXQLbNpXg568iA4NH7UjfFZQRv-soGEhdCh2ErqGUsIrHMTTRVUzWy_LaXkZyyTWGiK0kaN4wpc_YjInxBPK6fMrcAI6xgzEDmx39po_VjYyn4uE0-7xQHB_KLfvjgTwj9oAcBL7162grmvwpU1JXX_BjqRsaY1tTeu5nMsxpJpTI9aZc--XiTVc9mU3FkuFd6eFNz2sxUX1QF7E6bw9LH2FcEvHrgaQhvXfjdPdFaP3-qUyYiivjAsHx02Kj-5kKaUIGZVH5bJ4K4tyi-kX7LE5axrYlETxI6CBA_rlZ3zJ7Nsrnrx1UUtiVLKoJ9d-ctFONR2O5JXaSAyFEqraaHAF6m2ZvHw1LbHJJyhNj0sM0yO-jCP-zFb8kcjJn5GEjot8QbA7jnkzd0qDyfdYfvtMBxJ2GPoVwJSexK2YrA3uhED8Wj9JkuKBylRg8zXY4VJfZ6_6U9jVHr4gWoaI99eMcLMpa56eACAl0HV1_teAGDqYu6eo1VtIGGUWQQwzAQHfUaLGriMppfGT-AHfRZpU5i5l0ziw1cIcI4PfP-lSVoSrKQbauukNqUewCoBUUUfRGI7ba3-tkFN3JGGI2NIsl3HSo_Mw_IMQY0ozcqgvt9PFuksoB4Rrw52x1W8ElsSp-ATiNsfCgQ4FOizQVMxhvDSW6nsxHX9zI4QQ1OkqX6AVfxhmrbnEUy3lPSz1RxNNm2PpDLrYvMpuDfu1vcaZWtprCl3ivIJdl0K5-hvhKQRUBSBRVZXfmjV315vMXMDpRQGKQ45ghnUpRN8dxYL7yp-umI3WHK0TPGW824JSeb4wLa3mEjc03u8t1BX5_ETQzAoPLlK5ityP63y3OBG3aKl4eoIvx6Qel0jnVsbS03og0vlAyKSvXSpnNvvryqwPb574ZiX7vz-yBvFFDkQSWEoIpc8wibrQOaTInHMT2x7hX0iN0c38IFe14XC9Mx5u78XgELGrTn65jfkVMa9MVEu3W3VNh6QhAjRZR7ROaiRb2rd-L9yqnRL4gXg-6c0UF7el8GxZ7W73V2yZpeIzt7ZkOHyj_3lUwhls-97ZjUru_cDF5tdEfOVKPz3qIVmTg1S6qHBJ1xZK81Fk8-pIsQpaWJTA0aIfdtwCodrmXhavO6Q';

// const CurriculumModal = ({ course, onClose, mode = 'add' }) => {
//   const coursecode = course?._id;
//   const coursename = course?.courseName || 'Unknown Course';
//   const [modules, setModules] = useState([]);
//   const [existingModules, setExistingModules] = useState([]);
//   const [nextModuleId, setNextModuleId] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);
//   const [uploadingVideos, setUploadingVideos] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState({});
//   const [activeMode, setActiveMode] = useState(mode);
//   const [editingModule, setEditingModule] = useState(null);
//   const [moduleToDelete, setModuleToDelete] = useState(null);

//   const dbx = new Dropbox({ accessToken: DROPBOX_ACCESS_TOKEN });

//   // Fetch existing modules and determine the next module ID
//   useEffect(() => {
//     const fetchExistingCurriculum = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`/api/curriculum/${coursecode}`);
        
//         if (response.data && response.data.curriculum && response.data.curriculum.modules) {
//           const existingMods = response.data.curriculum.modules;
//           setExistingModules(existingMods);
          
//           if (existingMods.length > 0) {
//             const maxModuleId = Math.max(...existingMods.map(module => 
//               parseInt(module.moduleId, 10) || 0
//             ));
//             const nextId = maxModuleId + 1;
//             setNextModuleId(nextId);
//             console.log(`Found ${existingMods.length} existing modules. Next ID will be ${nextId}`);
//           } else {
//             setNextModuleId(1);
//           }
//         } else {
//           setExistingModules([]);
//           setNextModuleId(1);
//         }
        
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching curriculum:", error);
//         setNextModuleId(1);
//         setExistingModules([]);
//         setIsLoading(false);
//       }
//     };
    
//     if (coursecode) {
//       fetchExistingCurriculum();
//     }
//   }, [coursecode]);

//   // Initialize modules for add mode
//   useEffect(() => {
//     if (!isLoading && activeMode === 'add' && modules.length === 0) {
//       setModules([
//         { 
//           moduleId: nextModuleId, 
//           courseMode: 'Pre-recorded', 
//           moduleName: '', 
//           title: '', 
//           videos: [], 
//           description: '',
//           isNew: true
//         }
//       ]);
//     }
//   }, [isLoading, nextModuleId, activeMode]);

//   const handleModeChange = (newMode) => {
//     setActiveMode(newMode);
//     setModules([]);
//     setEditingModule(null);
//     setModuleToDelete(null);
//   };

//   const handleModuleChange = (index, field, value) => {
//     const updatedModules = [...modules];
//     updatedModules[index][field] = value;
//     setModules(updatedModules);
//   };

//   const handleVideoUpload = (index, files) => {
//     const updatedModules = [...modules];
//     updatedModules[index].videos = Array.from(files);
//     updatedModules[index].newVideos = Array.from(files); // Mark as new videos
//     setModules(updatedModules);
//   };

//   const addModule = () => {
//     const currentMaxId = Math.max(
//       ...modules.map(module => module.moduleId), 
//       ...existingModules.map(module => parseInt(module.moduleId, 10) || 0),
//       0
//     );
//     const newModuleId = currentMaxId + 1;
    
//     setModules([
//       ...modules, 
//       { 
//         moduleId: newModuleId, 
//         courseMode: 'Pre-recorded', 
//         moduleName: '', 
//         title: '', 
//         videos: [], 
//         description: '',
//         isNew: true
//       }
//     ]);
//   };

//   const removeModule = (indexToRemove) => {
//     if (modules.length > 1) {
//       const updatedModules = modules.filter((_, index) => index !== indexToRemove);
//       setModules(updatedModules);
//     }
//   };

//   const startEditModule = (module) => {
//     setEditingModule({ ...module, originalVideos: module.videos || [] });
//     setActiveMode('edit');
//   };

//   const cancelEdit = () => {
//     setEditingModule(null);
//     setActiveMode('view');
//   };

//   const confirmDelete = (module) => {
//     setModuleToDelete(module);
//   };

//   const cancelDelete = () => {
//     setModuleToDelete(null);
//   };

//  const deleteVideosFromDropbox = async (videos, moduleId) => {
//     const errors = [];
    
//     for (const videoPath of videos) {
//       try {
//         console.log(`Attempting to delete video: ${videoPath}`);
//         await dbx.filesDeleteV2({ path: videoPath });
//         console.log(`Successfully deleted: ${videoPath}`);
//       } catch (error) {
//         console.error(`Error deleting ${videoPath}:`, error);
//         errors.push({ path: videoPath, error: error.message });
//       }
//     }
    
//     // Try to delete the module folder if it exists
//     try {
//       const moduleFolderPath = `/${coursename}/Module_${moduleId}`;
//       console.log(`Attempting to delete module folder: ${moduleFolderPath}`);
//       await dbx.filesDeleteV2({ path: moduleFolderPath });
//       console.log(`Successfully deleted module folder: ${moduleFolderPath}`);
//     } catch (error) {
//       console.log(`Module folder deletion failed (may already be empty): ${error.message}`);
//     }
    
//     return errors;
//   };

//   const executeDelete = async () => {
//     if (!moduleToDelete) return;
    
//     try {
//       // setDeleting(true);
//       setUploadProgress(prev => ({
//         ...prev,
//         [moduleToDelete.moduleId]: 'Deleting videos...'
//       }));

//       // Delete videos from Dropbox first
//       if (moduleToDelete.videos && moduleToDelete.videos.length > 0) {
//         const deleteErrors = await deleteVideosFromDropbox(moduleToDelete.videos, moduleToDelete.moduleId);
        
//         if (deleteErrors.length > 0) {
//           console.warn('Some videos could not be deleted from Dropbox:', deleteErrors);
//           // Continue with database deletion even if some Dropbox deletions failed
//         }
//       }

//       setUploadProgress(prev => ({
//         ...prev,
//         [moduleToDelete.moduleId]: 'Removing from database...'
//       }));

//       // Delete module from database
//       await axios.delete(`/api/curriculum/${coursecode}/module/${moduleToDelete.moduleId}`);
      
//       setUploadProgress(prev => ({
//         ...prev,
//         [moduleToDelete.moduleId]: 'Refreshing data...'
//       }));

//       // Refresh existing modules
//       const response = await axios.get(`/api/curriculum/${coursecode}`);
//       if (response.data && response.data.curriculum && response.data.curriculum.modules) {
//         setExistingModules(response.data.curriculum.modules);
//       } else {
//         setExistingModules([]);
//       }
      
//       setUploadProgress(prev => ({
//         ...prev,
//         [moduleToDelete.moduleId]: 'Completed'
//       }));

//       setModuleToDelete(null);
//       alert('Module and associated videos deleted successfully!');
      
//       // Clear progress after a delay
//       setTimeout(() => {
//         setUploadProgress(prev => {
//           const newProgress = { ...prev };
//           delete newProgress[moduleToDelete?.moduleId];
//           return newProgress;
//         });
//       }, 2000);
      
//     } catch (error) {
//       console.error('Error deleting module:', error);
//       alert(`Failed to delete module: ${error.response?.data?.details || error.message}`);
//       setUploadProgress(prev => ({
//         ...prev,
//         [moduleToDelete.moduleId]: 'Error occurred'
//       }));
//     } finally {
//       setDeleting(false);
//     }
//   };

//   // Upload videos to Dropbox


//   // Upload videos to Dropbox
//   const uploadVideosToDropbox = async (moduleVideos, moduleId) => {
//     const uploadedVideoPaths = [];
    
//     for (let i = 0; i < moduleVideos.length; i++) {
//       const video = moduleVideos[i];
//       const fileName = `${video.name}`;
//       const dropboxPath = `/${coursename}/Module_${moduleId}/${fileName}`;
      
//       try {
//         setUploadProgress(prev => ({
//           ...prev,
//           [moduleId]: `Uploading video ${i + 1}/${moduleVideos.length}: ${video.name}`
//         }));

//         const response = await dbx.filesUpload({
//           path: dropboxPath,
//           contents: video,
//           mode: 'add',
//           autorename: true,
//           mute: false,
//         });

//         uploadedVideoPaths.push(response.result.path_display);
//         console.log(`Uploaded: ${response.result.name} to ${response.result.path_display}`);
        
//       } catch (error) {
//         console.error(`Error uploading ${video.name}:`, error);
//         throw new Error(`Failed to upload ${video.name}: ${error.message}`);
//       }
//     }
    
//     return uploadedVideoPaths;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (activeMode === 'add') {
//       await handleAddSubmit();
//     } else if (activeMode === 'edit') {
//       await handleEditSubmit();
//     }
//   };

//   const handleAddSubmit = async () => {
//     const invalidModules = modules.filter(mod => !mod.moduleName.trim());
//     if (invalidModules.length > 0) {
//       alert('Please fill in all module names before saving.');
//       return;
//     }
    
//     try {
//       setUploadingVideos(true);
//       setUploadProgress({});

//       const processedModules = [];
      
//       for (const mod of modules) {
//         let videoPaths = [];
        
//         if (mod.videos && mod.videos.length > 0) {
//           videoPaths = await uploadVideosToDropbox(mod.videos, mod.moduleId);
//         }

//         processedModules.push({
//           moduleId: Number(mod.moduleId),
//           courseMode: mod.courseMode,
//           moduleName: mod.moduleName,
//           title: mod.title,
//           description: mod.description,
//           videos: videoPaths
//         });

//         setUploadProgress(prev => ({
//           ...prev,
//           [mod.moduleId]: 'Completed'
//         }));
//       }

//       const response = await axios.post('/api/curriculum', {
//         coursecode,
//         modules: processedModules
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       console.log('Curriculum saved successfully:', response.data);
//       alert('Curriculum saved successfully!');
//       onClose();
      
//     } catch (error) {
//       console.error('Error saving curriculum:', error);
//       alert(`Failed to save curriculum: ${error.message}`);
//     } finally {
//       setUploadingVideos(false);
//       setUploadProgress({});
//     }
//   };

//   const handleEditSubmit = async () => {
//     if (!editingModule.moduleName.trim()) {
//       alert('Please fill in the module name.');
//       return;
//     }

//     try {
//       setUploadingVideos(true);
//       setUploadProgress({});

//       let videoPaths = editingModule.originalVideos || [];

//       // Upload new videos if any
//       if (editingModule.newVideos && editingModule.newVideos.length > 0) {
//         const newVideoPaths = await uploadVideosToDropbox(editingModule.newVideos, editingModule.moduleId);
//         videoPaths = [...videoPaths, ...newVideoPaths];
//       }

//       const updateData = {
//         courseMode: editingModule.courseMode,
//         moduleName: editingModule.moduleName,
//         title: editingModule.title,
//         description: editingModule.description,
//         videos: videoPaths
//       };

//       setUploadProgress(prev => ({
//         ...prev,
//         [editingModule.moduleId]: 'Updating...'
//       }));

//       await axios.put(`/api/curriculum/${coursecode}/module/${editingModule.moduleId}`, updateData);

//       // Refresh existing modules
//       const response = await axios.get(`/api/curriculum/${coursecode}`);
//       if (response.data && response.data.curriculum && response.data.curriculum.modules) {
//         setExistingModules(response.data.curriculum.modules);
//       }

//       setUploadProgress(prev => ({
//         ...prev,
//         [editingModule.moduleId]: 'Completed'
//       }));

//       alert('Module updated successfully!');
//       setEditingModule(null);
//       setActiveMode('view');
      
//     } catch (error) {
//       console.error('Error updating module:', error);
//       alert(`Failed to update module: ${error.message}`);
//     } finally {
//       setUploadingVideos(false);
//       setUploadProgress({});
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white p-6 rounded w-full max-w-3xl text-center">
//           <div className="flex items-center justify-center space-x-2">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//             <p>Loading curriculum data...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded w-full max-w-5xl overflow-y-auto max-h-[90vh]">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Curriculum Management - {coursename}</h2>
//           <button 
//             onClick={onClose} 
//             className="text-2xl font-bold text-gray-500 hover:text-gray-700"
//             disabled={uploadingVideos}
//           >
//             &times;
//           </button>
//         </div>

//         {/* Mode Selection Tabs */}
//         <div className="flex space-x-2 mb-6 border-b">
//           <button
//             onClick={() => handleModeChange('view')}
//             className={`px-4 py-2 font-semibold ${activeMode === 'view' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
//             disabled={uploadingVideos}
//           >
//             View Modules ({existingModules.length})
//           </button>
//           <button
//             onClick={() => handleModeChange('add')}
//             className={`px-4 py-2 font-semibold ${activeMode === 'add' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
//             disabled={uploadingVideos}
//           >
//             Add New Modules
//           </button>
//         </div>

//         {uploadingVideos && (
//           <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">
//             <p className="font-semibold text-blue-800">Processing...</p>
//             {Object.entries(uploadProgress).map(([moduleId, status]) => (
//               <p key={moduleId} className="text-sm text-blue-600">
//                 Module {moduleId}: {status}
//               </p>
//             ))}
//           </div>
//         )}

//         {/* View Mode */}
//         {activeMode === 'view' && (
//           <div className="space-y-4">
//             {existingModules.length === 0 ? (
//               <div className="text-center py-8 text-gray-500">
//                 <p>No modules found for this course.</p>
//                 <button
//                   onClick={() => handleModeChange('add')}
//                   className="mt-2 text-blue-500 hover:text-blue-700"
//                 >
//                   Add your first module
//                 </button>
//               </div>
//             ) : (
//               existingModules.map((module) => (
//                 <div key={module.moduleId} className="border p-4 rounded bg-gray-50">
//                   <div className="flex justify-between items-start mb-3">
//                     <div>
//                       <h3 className="font-semibold text-lg">Module {module.moduleId}: {module.moduleName}</h3>
//                       <p className="text-sm text-gray-600">{module.courseMode}</p>
//                     </div>
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => startEditModule(module)}
//                         className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
//                         disabled={uploadingVideos}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => confirmDelete(module)}
//                         className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
//                         disabled={uploadingVideos}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
                  
//                   {module.title && (
//                     <p className="text-gray-700 mb-2"><strong>Title:</strong> {module.title}</p>
//                   )}
                  
//                   {module.description && (
//                     <p className="text-gray-700 mb-2"><strong>Description:</strong> {module.description}</p>
//                   )}
                  
//                   {module.videos && module.videos.length > 0 && (
//                     <div>
//                       <p className="font-semibold text-gray-700 mb-1">Videos ({module.videos.length}):</p>
//                       <ul className="list-disc list-inside text-sm text-gray-600">
//                         {module.videos.map((video, index) => (
//                           <li key={index}>{video.split('/').pop()}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               ))
//             )}
//           </div>
//         )}

//         {/* Edit Mode */}
//         {activeMode === 'edit' && editingModule && (
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="border p-4 rounded space-y-3 bg-yellow-50">
//               <div className="font-semibold text-gray-700 mb-2">
//                 Editing Module {editingModule.moduleId}
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 <select
//                   value={editingModule.courseMode}
//                   onChange={(e) => setEditingModule({...editingModule, courseMode: e.target.value})}
//                   className="w-full border p-2 rounded"
//                   disabled={uploadingVideos}
//                 >
//                   <option value="Pre-recorded">Pre-recorded</option>
//                   <option value="Live">Live</option>
//                 </select>
                
//                 <input
//                   type="text"
//                   placeholder="Module Name *"
//                   className="w-full border p-2 rounded"
//                   value={editingModule.moduleName}
//                   onChange={(e) => setEditingModule({...editingModule, moduleName: e.target.value})}
//                   required
//                   disabled={uploadingVideos}
//                 />
//               </div>
              
//               <input
//                 type="text"
//                 placeholder="Title"
//                 className="w-full border p-2 rounded"
//                 value={editingModule.title}
//                 onChange={(e) => setEditingModule({...editingModule, title: e.target.value})}
//                 disabled={uploadingVideos}
//               />
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Add New Videos (existing videos will be kept)
//                 </label>
//                 <input
//                   type="file"
//                   multiple
//                   accept="video/*"
//                   onChange={(e) => setEditingModule({...editingModule, newVideos: Array.from(e.target.files)})}
//                   className="w-full border p-2 rounded"
//                   disabled={uploadingVideos}
//                 />
//                 {editingModule.newVideos && editingModule.newVideos.length > 0 && (
//                   <p className="text-sm text-green-600 mt-1">
//                     {editingModule.newVideos.length} new videos selected
//                   </p>
//                 )}
//               </div>
              
//               {editingModule.originalVideos && editingModule.originalVideos.length > 0 && (
//                 <div>
//                   <p className="text-sm font-medium text-gray-700 mb-1">
//                     Existing Videos ({editingModule.originalVideos.length}):
//                   </p>
//                   <ul className="list-disc list-inside text-sm text-gray-600">
//                     {editingModule.originalVideos.map((video, index) => (
//                       <li key={index}>{video.split('/').pop()}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
              
//               <textarea
//                 placeholder="Description"
//                 className="w-full border p-2 rounded"
//                 rows="3"
//                 value={editingModule.description}
//                 onChange={(e) => setEditingModule({...editingModule, description: e.target.value})}
//                 disabled={uploadingVideos}
//               />
//             </div>

//             <div className="flex justify-between items-center pt-4">
//               <button 
//                 type="button" 
//                 onClick={cancelEdit}
//                 className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded"
//                 disabled={uploadingVideos}
//               >
//                 Cancel
//               </button>
//               <button 
//                 type="submit" 
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded disabled:bg-gray-400"
//                 disabled={uploadingVideos}
//               >
//                 {uploadingVideos ? 'Updating...' : 'Update Module'}
//               </button>
//             </div>
//           </form>
//         )}

//         {/* Add Mode */}
//         {activeMode === 'add' && (
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {modules.map((mod, index) => (
//               <div key={`module-${mod.moduleId}`} className="border p-4 rounded space-y-3 bg-green-50">
//                 <div className="flex justify-between items-center mb-2">
//                   <div className="font-semibold text-gray-700">Module {mod.moduleId} (New)</div>
//                   {modules.length > 1 && (
//                     <button
//                       type="button"
//                       onClick={() => removeModule(index)}
//                       className="text-red-500 hover:text-red-700 font-bold"
//                       disabled={uploadingVideos}
//                     >
//                       Remove
//                     </button>
//                   )}
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <select
//                     value={mod.courseMode}
//                     onChange={(e) => handleModuleChange(index, 'courseMode', e.target.value)}
//                     className="w-full border p-2 rounded"
//                     disabled={uploadingVideos}
//                   >
//                     <option value="Pre-recorded">Pre-recorded</option>
//                     <option value="Live">Live</option>
//                   </select>
                  
//                   <input
//                     type="text"
//                     placeholder="Module Name *"
//                     className="w-full border p-2 rounded"
//                     value={mod.moduleName}
//                     onChange={(e) => handleModuleChange(index, 'moduleName', e.target.value)}
//                     required
//                     disabled={uploadingVideos}
//                   />
//                 </div>
                
//                 <input
//                   type="text"
//                   placeholder="Title"
//                   className="w-full border p-2 rounded"
//                   value={mod.title}
//                   onChange={(e) => handleModuleChange(index, 'title', e.target.value)}
//                   disabled={uploadingVideos}
//                 />
                
//                 <input
//                   type="file"
//                   multiple
//                   accept="video/*"
//                   onChange={(e) => handleVideoUpload(index, e.target.files)}
//                   className="w-full border p-2 rounded"
//                   disabled={uploadingVideos}
//                 />
                
//                 <div className="text-sm text-gray-500">
//                   {mod.videos.length > 0 ? `${mod.videos.length} videos selected` : "No videos selected"}
//                   {uploadingVideos && uploadProgress[mod.moduleId] && (
//                     <div className="mt-1 text-blue-600 font-semibold">{uploadProgress[mod.moduleId]}</div>
//                   )}
//                 </div>
                
//                 <textarea
//                   placeholder="Description"
//                   className="w-full border p-2 rounded"
//                   rows="3"
//                   value={mod.description}
//                   onChange={(e) => handleModuleChange(index, 'description', e.target.value)}
//                   disabled={uploadingVideos}
//                 />
//               </div>
//             ))}

//             <div className="flex justify-between items-center pt-4">
//               <button 
//                 type="button" 
//                 onClick={addModule} 
//                 className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded disabled:bg-gray-400"
//                 disabled={uploadingVideos}
//               >
//                 + Add Another Module
//               </button>
//               <button 
//                 type="submit" 
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded disabled:bg-gray-400"
//                 disabled={uploadingVideos}
//               >
//                 {uploadingVideos ? 'Saving...' : 'Save New Modules'}
//               </button>
//             </div>
//           </form>
//         )}

//         {/* Delete Confirmation Modal */}
//         {moduleToDelete && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-60">
//             <div className="bg-white p-6 rounded max-w-md w-full mx-4">
//               <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
//               <p className="mb-4">
//                 Are you sure you want to delete Module {moduleToDelete.moduleId}: "{moduleToDelete.moduleName}"?
//               </p>
//               <p className="text-sm text-red-600 mb-4">
//                 This action cannot be undone and will also remove all associated videos from Dropbox.
//               </p>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   onClick={cancelDelete}
//                   className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={executeDelete}
//                   className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//                 >
//                   Delete Module
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CurriculumModal;