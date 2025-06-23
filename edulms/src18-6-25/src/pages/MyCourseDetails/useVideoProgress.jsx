import { useState, useEffect } from "react";
export function useVideoProgress(
    lessonModules,
    storageKey = "videoProgress",
    studentId,
    scourseId
) {

    scourseId = scourseId || localStorage.getItem("courseId");
    studentId = studentId || localStorage.getItem("studentId");
    // Flatten all videos into an array of { id, title, link }
    const allVideos = lessonModules.flatMap((module) =>
        module.parts.map((part) => ({
            id: part.id,
            title: part.title,
            link: part.link,
        }))
    );

    // Get initial state from localStorage or build from current modules
    const getInitial = () => {
        // localStorage.removeItem("videoProgress");
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

    // Keep localStorage in sync with state
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(videoProgress));
    }, [videoProgress, storageKey]);

    // Add new videos if lessonModules changes
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
    }, [lessonModules]);

    // Update watched time for a video
    const updateWatched = (id, watched) =>
        setVideoProgress((prev) => ({
            ...prev,
            [id]: { ...prev[id], watched },
        }));

    // Update total duration for a video
    const updateTotal = (id, total) =>
        setVideoProgress((prev) => ({
            ...prev,
            [id]: { ...prev[id], total },
        }));

    // Mark a video as completed
    const markCompleted = (id) =>
        setVideoProgress((prev) => ({
            ...prev,
            [id]: { ...prev[id], completed: true },
        }));

    // Completion stats
    const totalVideos = allVideos.length;
    const completedVideos = Object.values(videoProgress).filter(
        (v) => v.completed
    ).length;
    const completionPercent = totalVideos
        ? Math.round((completedVideos / totalVideos) * 100)
        : 0;
    useEffect(() => {
        if (
            totalVideos > 0 &&
            completedVideos === totalVideos &&
            studentId &&
            scourseId
        ) {
            console.log("All videos completed, marking course as complete in backend");
            fetch("http://localhost:8080/api/course-completion", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    studentId,
                    scourseId,
                    completed: true,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    // Optionally display a message or toast
                    console.log("Course marked as completed!", data);
                })
                .catch((err) => {
                    // Optionally handle error
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



