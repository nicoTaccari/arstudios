import React from "react";
import { SectionHeader } from "../../common/section-header/index";

const Rider = () => {
  const title = "Rider";
  const subtitle =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.";
  return (
    <section className="section" id="rider">
      <div className="container">
        <SectionHeader title={title} subtitle={subtitle} />
      </div>
    </section>
  );
};

export default Rider;
