import React from "react";
import ReactRotatingText from "react-rotating-text";

export const Jumbo = () => {
  return (
    <>
      <video
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source
          src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
          type="video/mp4"
        />
      </video>
      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">
            <h1 class="mb-4">
              We love to &nbsp;
              <strong>
                <ReactRotatingText
                  items={["DESIGN", "PRODUCE", "RECORD", "CREATE"]}
                  typingInterval={100}
                  emptyPause={1500}
                  pause={2000}
                />
                <span class="wrap"></span>
              </strong>
            </h1>
            <h1 class="display-3">Video Header</h1>
            <p class="lead mb-0">With HTML5 Video and Bootstrap 4</p>
          </div>
        </div>
      </div>
    </>
  );
};
