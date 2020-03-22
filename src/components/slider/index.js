import React from "react";
import { Typewrite } from "../utils/typewrite";

export const Slider = () => {
  const messages = ["PRODUCE", "DESIGN", "RECORD", "CREATE"];
  return (
    <section class="home-slider ftco-degree-bg">
      <div class="slider-item">
        <div class="container">
          <div class="row slider-text align-items-center justify-content-center">
            <div class="col-md-10 text-center">
              <h1 class="mb-4">
                I love to
                <Typewrite heading={"We love to:"} messages={messages} />
              </h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
