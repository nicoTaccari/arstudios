import React from "react";
import Console from "../../assets/images/console.jpg";
import Camera from "../../assets/images/camera.jpg";
import Micro from "../../assets/images/micro.jpg";

export const Servicios = () => {
  return (
    <div className="section-container">
      <div className="row">
        <div class="col section-1 section-description">
          <h2>Nuestros Servicios</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div class="card m-3">
            <img
              class="card-img-top service-image"
              src={Console}
              alt="Card cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title that wraps to a new line</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div class="card m-3">
            <img class="card-img-top" src={Camera} alt="Card cap" />
            <div class="card-body">
              <h5 class="card-title">Card title that wraps to a new line</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div class="card m-3">
            <img class="card-img-top" src={Micro} alt="Card cap" />
            <div class="card-body">
              <h5 class="card-title">Card title that wraps to a new line</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
