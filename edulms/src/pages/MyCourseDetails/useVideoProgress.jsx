// import { useState, useEffect } from "react";
// export function useVideoProgress(
//     lessonModules,
//     storageKey = "videoProgress",
//     studentId,
//     scourseId
// ) {

//     scourseId = scourseId || localStorage.getItem("courseId");
//     studentId = studentId || localStorage.getItem("studentId");
//     // Flatten all videos into an array of { id, title, link }
//     const allVideos = lessonModules.flatMap((module) =>
//         module.parts.map((part) => ({
//             id: part.id,
//             title: part.title,
//             link: part.link,
//         }))
//     );

//     // Get initial state from localStorage or build from current modules
//     const getInitial = () => {
//         // localStorage.removeItem("videoProgress");
//         const saved = localStorage.getItem(storageKey);
//         if (saved) return JSON.parse(saved);
//         const all = allVideos.reduce((acc, v) => {
//             acc[v.id] = {
//                 watched: 0,
//                 completed: false,
//                 total: 0,
//                 link: v.link,
//                 title: v.title,
//             };
//             return acc;
//         }, {});
//         return all;
//     };

//     const [videoProgress, setVideoProgress] = useState(getInitial);

//     // Keep localStorage in sync with state
//     useEffect(() => {
//         localStorage.setItem(storageKey, JSON.stringify(videoProgress));
//     }, [videoProgress, storageKey]);

//     // Add new videos if lessonModules changes
//     useEffect(() => {
//         setVideoProgress((prev) => {
//             const updated = { ...prev };
//             allVideos.forEach((v) => {
//                 if (!updated[v.id]) {
//                     updated[v.id] = {
//                         watched: 0,
//                         completed: false,
//                         total: 0,
//                         link: v.link,
//                         title: v.title,
//                     };
//                 }
//             });
//             return updated;
//         });
//         // eslint-disable-next-line
//     }, [lessonModules]);

//     // Update watched time for a video
//     const updateWatched = (id, watched) =>
//         setVideoProgress((prev) => ({
//             ...prev,
//             [id]: { ...prev[id], watched },
//         }));

//     // Update total duration for a video
//     const updateTotal = (id, total) =>
//         setVideoProgress((prev) => ({
//             ...prev,
//             [id]: { ...prev[id], total },
//         }));

//     // Mark a video as completed
//     const markCompleted = (id) =>
//         setVideoProgress((prev) => ({
//             ...prev,
//             [id]: { ...prev[id], completed: true },
//         }));

//     // Completion stats
//     const totalVideos = allVideos.length;
//     const completedVideos = Object.values(videoProgress).filter(
//         (v) => v.completed
//     ).length;
//     const completionPercent = totalVideos
//         ? Math.round((completedVideos / totalVideos) * 100)
//         : 0;
//     useEffect(() => {
//         if (
//             totalVideos > 0 &&
//             completedVideos === totalVideos &&
//             studentId &&
//             scourseId
//         ) {
//             console.log("All videos completed, marking course as complete in backend");
//             fetch("http://localhost:8080/api/course-completion", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     studentId,
//                     scourseId,
//                     completed: true,
//                 }),
//             })
//                 .then((res) => res.json())
//                 .then((data) => {
//                     // Optionally display a message or toast
//                     console.log("Course marked as completed!", data);
//                 })
//                 .catch((err) => {
//                     // Optionally handle error
//                     console.error("Error marking course complete", err);
//                 });
//         }
//     }, [completedVideos, totalVideos, studentId, scourseId]);

//     return {
//         videoProgress,
//         updateWatched,
//         updateTotal,
//         markCompleted,
//         totalVideos,
//         completedVideos,
//         completionPercent,
//     };
// }





import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export function useVideoProgress(
    lessonModules,
    storageKey = "videoProgress",
    studentId,
    scourseId
) {
    scourseId = scourseId || localStorage.getItem("courseId");
    studentId = studentId || localStorage.getItem("studentId");
    const allVideos = lessonModules.flatMap((module) =>
        module.parts.map((part) => ({
            id: part.id,
            title: part.title,
            link: part.link,
        }))
    );

    // Get initial state from localStorage or build from current modules
    const getInitial = () => {
        const saved = localStorage.getItem(storageKey);
        if (saved) return JSON.parse(saved);
        const all = allVideos.reduce((acc, v) => {
            acc[v.id] = {
                watched: 0,
                completed: false,
                total: 0,
                link: v.link,
                title: v.title,
            };
            return acc;
        }, {});
        return all;
    };

    const [videoProgress, setVideoProgress] = useState(getInitial);

    // --- NEW: Fetch progress from backend on mount ---
    // useEffect(() => {
    //     if (studentId && scourseId && allVideos.length > 0) {
    //         axios.get(`http://localhost:8080/api/progress`, {
    //             params: { studentId, scourseId }
    //         }).then(res => {
    //             const serverProgress = res.data.progress || [];
    //             // Merge server progress into local progress
    //             setVideoProgress(prev => {
    //                 const merged = { ...prev };
    //                 serverProgress.forEach(p => {
    //                     if (merged[p.videoId]) {
    //                         merged[p.videoId] = {
    //                             ...merged[p.videoId],
    //                             watched: p.watched,
    //                             completed: p.completed,
    //                             total: p.total
    //                         };
    //                     }
    //                 });
    //                 return merged;
    //             });
    //         }).catch(e => {
    //             // Optionally handle error
    //             console.error("Failed to fetch progress from server", e);
    //         });
    //     }
    //     // eslint-disable-next-line
    // }, [studentId, scourseId, lessonModules.length]);

useEffect(() => {
    if (studentId && scourseId && allVideos.length > 0) {
        axios.get(`http://localhost:8080/api/progress`, {
            params: { studentId }
        }).then(res => {
            // res.data.courses is an object: { [scourseId]: { [videoId]: { completed: true } } }
            const courses = res.data.courses || {};
            const courseProgress = courses[scourseId] || {};

            // Convert to your local format if needed (for example, if your UI expects an object keyed by videoId)
            setVideoProgress(prev => {
                const merged = { ...prev };
                Object.keys(courseProgress).forEach(videoId => {
                    if (merged[videoId]) {
                        merged[videoId] = {
                            ...merged[videoId],
                            completed: courseProgress[videoId].completed
                        };
                    } else {
                        merged[videoId] = {
                            completed: courseProgress[videoId].completed
                        };
                    }
                });
                return merged;
            });
        }).catch(e => {
            console.error("Failed to fetch progress from server", e);
        });
    }
    // eslint-disable-next-line
}, [studentId, scourseId, lessonModules.length]);


    // Keep localStorage in sync with state
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(videoProgress));
    }, [videoProgress, storageKey]);

    // Add new videos if lessonModules changes
    const videoIds = lessonModules.flatMap(m => m.parts.map(p => p.id)).join(',');
    useEffect(() => {
        setVideoProgress((prev) => {
            const updated = { ...prev };
            allVideos.forEach((v) => {
                if (!updated[v.id]) {
                    updated[v.id] = {
                        watched: 0,
                        completed: false,
                        total: 0,
                        link: v.link,
                        title: v.title,
                    };
                }
            });
            return updated;
        });
        // eslint-disable-next-line
    }, [videoIds]);

    // --- NEW: Sync helper ---
    // const syncProgress = useCallback((id, data) => {
    //     if (!studentId || !scourseId) return;
    //     console.log("Syncing progress for video:", id, data);
    //     axios.post("http://localhost:8080/api/progress", {
    //         studentId,
    //         scourseId,
    //         videoId: id,
    //         ...data
    //     }).catch(e => {
    //         // Optionally handle error
    //         console.error("Failed to sync progress", e);
    //     });
    // }, [studentId, scourseId]);

const syncProgress = useCallback((videoId, completed) => {
    if (!studentId || !scourseId) return;
    console.log("Syncing progress for video:", videoId, completed);
    axios.post("http://localhost:8080/api/progress", {
        studentId,
        scourseId,
        videoId,
        completed
    }).catch(e => {
        // Optionally handle error
        console.error("Failed to sync progress", e);
    });
}, [studentId, scourseId]);

    // Update watched time for a video
    const updateWatched = (id, watched) => {
        setVideoProgress((prev) => {
            const next = {
                ...prev,
                [id]: { ...prev[id], watched }
            };
            syncProgress(id, { watched, total: prev[id].total, completed: prev[id].completed });
            return next;
        });
    };

    // Update total duration for a video
    const updateTotal = (id, total) => {
        setVideoProgress((prev) => {
            const next = {
                ...prev,
                [id]: { ...prev[id], total }
            };
            syncProgress(id, { watched: prev[id].watched, total, completed: prev[id].completed });
            return next;
        });
    };

    // Mark a video as completed
    const markCompleted = (id) => {
        setVideoProgress((prev) => {
            const next = {
                ...prev,
                [id]: { ...prev[id], completed: true }
            };
            syncProgress(id, { watched: prev[id].watched, total: prev[id].total, completed: true });
            return next;
        });
    };

    // Completion stats
    const totalVideos = allVideos.length;
    const completedVideos = Object.values(videoProgress).filter(
        (v) => v.completed
    ).length;
    const completionPercent = totalVideos
        ? Math.round((completedVideos / totalVideos) * 100)
        : 0;

    // Notify backend when ALL videos are completed (already in your code)
    useEffect(() => {
        if (
            totalVideos > 0 &&
            completedVideos === totalVideos &&
            studentId &&
            scourseId
        ) {
            axios.post("http://localhost:8080/api/course-completion", {
                studentId,
                scourseId,
                completed: true,
            }).then(res => {
                console.log("Course marked as completed!", res.data);
            }).catch(err => {
                console.error("Error marking course complete", err);
            });
        }
    }, [completedVideos, totalVideos, studentId, scourseId]);

    return {
        videoProgress,
        updateWatched,
        updateTotal,
        markCompleted,
        totalVideos,
        completedVideos,
        completionPercent,
    };
}

