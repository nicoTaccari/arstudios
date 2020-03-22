import React from "react";
import { Navbar } from "../navbar/index";
import { Slider } from "../slider/index";

export const Jumbo = () => {
  return (
    <>
      <header>
        <div class="overlay"></div>
        <Navbar />
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
            type="video/mp4"
          />
        </video>
        <div class="container">
          <div class="d-flex text-center align-items-center">
            <div class="w-100 text-white">
              <Slider />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
