import React from "react";

import video from "../../../assets/qf_video2.mp4";

import "./video.styles.scss";

function VideoHome() {

  return (
    <>
      <section className="video-container">

        <div className="over-opacity-video">
          <p>
            <h2 className="video-text-title">Quinta das Fontes</h2>
          </p>
          <p>
            <h4 className="video-text-subtitle">A cada canto um encanto!</h4>
          </p>
        </div>
        <div className="video-div">
            <video
                src={video}
                id="video-hp"
                autoPlay
                loop
                muted
                type="video/mp4"
            />
        </div>
      </section>
    </>
    );
}

export default VideoHome;
