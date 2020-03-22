import React from "react";

export const Slider = () => {
  return (
    <section class="home-slider ftco-degree-bg">
      <div class="slider-item">
        <div class="container">
          <div class="row slider-text align-items-center justify-content-center">
            <div class="col-md-10 ftco-animate text-center">
              <h1 class="mb-4">
                I love to
                <strong
                  class="typewrite"
                  data-period="4000"
                  data-type='[ "Produce.", "Design.", "Explore.", "Capture." ]'
                >
                  <span class="wrap"></span>
                </strong>
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
