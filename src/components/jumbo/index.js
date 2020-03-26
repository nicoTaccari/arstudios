import React from "react";
import ReactRotatingText from "react-rotating-text";
import Video from "../../assets/videos/header-video.mp4";

export const Jumbo = () => {
  return (
    <>
      <video
        id="jumbo"
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src={Video} type="video/mp4" />
      </video>
      <div className="container h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <h1 className="mb-4">
              We love to &nbsp;
              <strong>
                <ReactRotatingText
                  items={["DESIGN", "PRODUCE", "RECORD", "CREATE"]}
                  typingInterval={100}
                  emptyPause={1500}
                  pause={2000}
                />
                <span className="wrap"></span>
              </strong>
            </h1>
            <h1 className="display-3">April Road Studios</h1>
            <p className="lead mb-0">based in Barcelona</p>
          </div>
        </div>
      </div>
    </>
  );
};
