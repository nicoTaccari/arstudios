import React from "react";
import Console from "../../assets/images/console.jpg";
import Camera from "../../assets/images/camera.jpg";
import Micro from "../../assets/images/micro.jpg";
import { Service } from "./service";
import { SectionHeader } from "../../common/section-header/index";

const Servicios = () => {
  const title = "services";
  const description =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  return (
    <section className="section" id="services">
      <div className="container-fluid">
        <SectionHeader title={title} subtitle={description} />

        <div className="row no-gutters justify-content-center pl-0 pr-0">
          <Service image={Console} />

          <Service image={Micro} right={true} />

          <Service image={Camera} />
        </div>
      </div>
    </section>
  );
};

export default Servicios;
