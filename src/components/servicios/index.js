import React from "react";
import Console from "../../assets/images/console.jpg";
import Camera from "../../assets/images/camera.jpg";
import Micro from "../../assets/images/micro.jpg";
import { Service } from "./service";

export const Servicios = () => {
  return (
    <section class="ftco-section">
      <div class="container-fluid">
        <div class="row no-gutters justify-content-center mb-5 pb-5">
          <div class="col-md-7 text-center heading-section">
            <span class="subheading">Works</span>
            <h2>Recent Works</h2>
          </div>
        </div>
        <div class="row no-gutters">
          <Service image={Console} />

          <Service image={Micro} right={true} />

          <Service image={Camera} />
        </div>
      </div>
    </section>
  );
};
