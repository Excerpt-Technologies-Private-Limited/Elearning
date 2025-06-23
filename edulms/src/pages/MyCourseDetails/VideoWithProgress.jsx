import React, { useRef, useEffect } from "react";
import './Mycoursedetails.css'

const VideoWithProgress = ({
  videoUrl,
  title,
  watched = 0,
  total = 0,
  completed = false,
  onWatchedChange,
  onTotalChange,
  onComplete,
}) => {
  const videoRef = useRef(null);

  // When video pauses or ends, always save currentTime
  const handlePauseOrEnded = () => {
    if (videoRef.current) {
      onWatchedChange(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = (e) => {
    onTotalChange(e.target.duration);
  };

  const handleTimeUpdate = (e) => {
    const duration = videoRef.current?.duration || total;
    const currentTime = e.target.currentTime;
    if (
      duration > 0 &&
      !completed &&
      currentTime / duration > 0.9 // 90% watched
    ) {
      onComplete();
    }
  };

  useEffect(() => {
    if (videoRef.current && watched > 0) {
      videoRef.current.currentTime = watched;
    }
  }, [title, watched]);

  return (
    <>
     <div className="video-container">
      <video
        ref={videoRef}
        src={videoUrl}
        controls
        style={{ width: "100%" }}
        onPause={handlePauseOrEnded}
        onEnded={handlePauseOrEnded}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />
      </div>
      <div>
        <strong>Time spent:</strong> {Math.round(watched)}s <br />
        <strong>Status:</strong>{" "}
        {completed ? (
          <span style={{ color: "green" }}>Completed</span>
        ) : (
          "Not completed"
        )}
      </div>
    </>
  );
};

export default VideoWithProgress;