import React, { useState, useRef } from "react";

const flattenVideos = lessonModules =>
  lessonModules.flatMap(module => module.parts.map(part => part.link));

const VideoPlayerWithProgress = ({
  videoUrl,
  onWatchedEnough,
  watchedTime,
  setWatchedTime,
  completed,
  setCompleted,
  totalDuration,
  setTotalDuration,
}) => {
  const videoRef = useRef(null);
  const [lastStart, setLastStart] = useState(null);

  // When video starts/resumes
  const handlePlay = () => setLastStart(Date.now());

  // When video pauses/ends
  const handlePauseOrEnded = () => {
    if (lastStart) {
      const elapsed = (Date.now() - lastStart) / 1000;
      setWatchedTime(prev => prev + elapsed);
      setLastStart(null);
    }
  };

  // When metadata loads, get total duration
  const handleLoadedMetadata = e => {
    setTotalDuration(e.target.duration);
  };

  // When time updates, check if watched enough
  const handleTimeUpdate = e => {
    const currentTime = e.target.currentTime;
    if (
      totalDuration &&
      !completed &&
      currentTime / totalDuration >= 0.9 // 90% watched
    ) {
      setCompleted(true);
      onWatchedEnough();
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        src={videoUrl}
        controls
        width="100%"
        onPlay={handlePlay}
        onPause={handlePauseOrEnded}
        onEnded={handlePauseOrEnded}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />
      <div>
        <strong>Time spent on this video:</strong> {Math.round(watchedTime)}s
        <br />
        <strong>
          {completed ? "✅ Video Completed" : "Not completed"}
        </strong>
      </div>
    </div>
  );
};

const Mycoursedetails = () => {
  // ... lessonModules as before

  // Flatten all videos
  const allVideos = flattenVideos(lessonModules);

  // Track time and completion per video
  const [videoProgress, setVideoProgress] = useState(
    allVideos.reduce((acc, url) => {
      acc[url] = { watched: 0, completed: false, total: 0 };
      return acc;
    }, {})
  );

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleWatchedEnough = videoUrl => {
    setVideoProgress(prev => ({
      ...prev,
      [videoUrl]: { ...prev[videoUrl], completed: true },
    }));
  };

  const setWatchedTime = (videoUrl, watched) => {
    setVideoProgress(prev => ({
      ...prev,
      [videoUrl]: { ...prev[videoUrl], watched },
    }));
  };

  const setTotalDuration = (videoUrl, total) => {
    setVideoProgress(prev => ({
      ...prev,
      [videoUrl]: { ...prev[videoUrl], total },
    }));
  };

  // Calculate stats
  const totalVideos = allVideos.length;
  const completedVideos = Object.values(videoProgress).filter(
    v => v.completed
  ).length;
  const completionPercent = Math.round(
    (completedVideos / totalVideos) * 100
  );

  return (
    <div>
      <div>
        <strong>
          Progress: {completedVideos} / {totalVideos} videos completed (
          {completionPercent}%)
        </strong>
      </div>
      {/* ... your left column for modules ... */}
      {/* Right column */}
      {selectedVideo && (
        <VideoPlayerWithProgress
          videoUrl={selectedVideo.videoUrl}
          onWatchedEnough={() => handleWatchedEnough(selectedVideo.videoUrl)}
          watchedTime={videoProgress[selectedVideo.videoUrl]?.watched || 0}
          setWatchedTime={watched =>
            setWatchedTime(selectedVideo.videoUrl, watched)
          }
          completed={videoProgress[selectedVideo.videoUrl]?.completed || false}
          setCompleted={completed =>
            setVideoProgress(prev => ({
              ...prev,
              [selectedVideo.videoUrl]: {
                ...prev[selectedVideo.videoUrl],
                completed,
              },
            }))
          }
          totalDuration={videoProgress[selectedVideo.videoUrl]?.total || 0}
          setTotalDuration={total =>
            setTotalDuration(selectedVideo.videoUrl, total)
          }
        />
      )}
    </div>
  );
};