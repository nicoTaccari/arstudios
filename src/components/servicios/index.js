import React from "react";
import Console from "../../assets/images/console.jpg";
import Camera from "../../assets/images/camera.jpg";
import Micro from "../../assets/images/micro.jpg";
import { Service } from "./service";

export const Servicios = () => {
  return (
    <section class="section">
      <div class="container-fluid">
        <div class="row no-gutters justify-content-center mb-5">
          <div class="col-md-8 text-center mb-5 heading">
            <h2 class="text-uppercase heading border-bottom mb-4">servicios</h2>
            <p className="mb-0 lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="row no-gutters justify-content-center pl-0 pr-0">
          <Service image={Console} />

          <Service image={Micro} right={true} />

          <Service image={Camera} />
        </div>
      </div>
    </section>
  );
};
