import React, { useEffect, useState } from "react";
import Header1 from "../Header/Header";
import SideNavBar1 from "../SideNavBar/SideNavBar";
import "./Mycoursedetails.css"
import { useLocation } from 'react-router-dom';
import axios from "axios";
import VideoWithProgress from "./VideoWithProgress";
import { useVideoProgress } from "./useVideoProgress";



const LiveClass1 = () => {
  const [openModuleIndex, setOpenModuleIndex] = useState(null);
  const [lessonModules, setLessonModules] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const location = useLocation();
  const { scourseId, courseName } = location.state || {};
  useEffect(() => {
    fetchCurriculam()
  }, [])
  const fetchCurriculam = async () => {
    const response = await axios.get(`http://localhost:8080/api/curriculum/${scourseId}`)
    console.log(response.data.curriculum)

  }

  // console.log("selected Video:", selectedVideo);

  useEffect(() => {
      // console.log("All videos:", localStorage.getItem("videoProgress"));
    const fetchVideos = async () => {


      try {
        fetch(`http://localhost:8080/api/videos/${courseName}`)
          .then(response => response.json())
          .then(data => {
            setLessonModules(data.content);
            console.log("Fetched lesson modules:", data.content);
          })
          .catch(error => console.error('Error fetching videos:', error));
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  {}

  const dataless = Object.entries(lessonModules).map(([key, value]) => ({
    title: key.replace('_', ' '),
    parts: value.map((part, idx) => ({
      id: part.name,
      title: part.name,
      link: part.link,
    })),
  }));
  // localStorage.removeItem("videoProgress");
// console.log("Lesson modules:", localStorage.getItem("videoProgress"));
  const allVideos = dataless.flatMap(module => module.parts);


  localStorage.setItem("courseId",scourseId);

  const {
    videoProgress,
    updateWatched,
    updateTotal,
    markCompleted,
    totalVideos,
    completedVideos,
    completionPercent,
  } = useVideoProgress(dataless);

  return (
    <>
       <Header1 />
      <SideNavBar1 />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div class="row mb-3">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">My CourseDetails</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Dashboard</a>
                      </li>
                      <li class="breadcrumb-item active">My CourseDetails</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">Course Progress</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Total videos: {totalVideos} | Completed videos: {completedVideos} | Completion: {completionPercent}% | </a>
                      </li>
                      
                    </ol>
                  </div>
                </div>
              </div>
            </div>

          

            <div className="row">
             
              <div className="col-lg-4">
                <div className="accordion" id="lessonAccordion">
                  {dataless.length > 0 ? (
                    dataless.map((module, index) => (
                      <div className="card" key={index}>
                        <div className="card-header">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link w-100 text-start"
                              onClick={() =>
                                setOpenModuleIndex(
                                  index === openModuleIndex ? null : index
                                )
                              }
                            >
                              {module.title}
                            </button>
                          </h5>
                        </div>
                        {index === openModuleIndex && (
                          <div className="card-body">
                            <ul className="list-unstyled">
                              {module.parts.map((part, idx) => (
                                <li key={idx}>
                                  <button
                                    className="btn btn-sm btn-outline-primary w-100 text-start mb-2"
                                    onClick={() =>
                                      setSelectedVideo({
                                        title: part.title,
                                        videoUrl: part.link,
                                        description: `Video: ${part.title}`,
                                      })
                                    }
                                  >
                                    {part.title}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div>No modules found.</div>
                  )}

                </div>
              </div>

             
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Selected Lesson</h4>
                  </div>
                  <div className="card-body">
                    {selectedVideo ? (

                      <VideoWithProgress
                        videoUrl={selectedVideo.videoUrl}
                        watched={videoProgress[selectedVideo.title]?.watched || 0}
                        total={videoProgress[selectedVideo.title]?.total || 0}
                        completed={videoProgress[selectedVideo.title]?.completed || false}
                        onWatchedChange={(watched) =>
                          updateWatched(selectedVideo.title, watched)
                        }
                        onTotalChange={(total) =>
                          updateTotal(selectedVideo.title, total)
                        }
                        onComplete={() => markCompleted(selectedVideo.title)}
                      />
                    ) : (
                      <p>Select a lesson part to watch the video and read the explanation.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div> 

     
      
    </>
  );



};

export default LiveClass1;
