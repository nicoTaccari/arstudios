import React from "react";
import SectionHeader from "../../common/section-header";
import ItemList from "./item-list";

const items = ["ejemplo", "ejemplo", "ejemplo", "ejemplo", "ejemplo"];

const microIcon = {
  fontSize: "4em",
  color: "#007bff",
};

const colItems = {
  textAlign: "center",
};

const Rider = () => {
  const title = "Rider";
  const subtitle =
    "We have the following high quality equipment in order to create the best sound experience.";
  return (
    <section className="section" id="rider">
      <div className="container">
        <SectionHeader title={title} subtitle={subtitle} />
        <div class="row justify-content-center">
          <div class="col-md align-self-center" style={colItems}>
            <span style={microIcon}>
              <i class="fas fa-microphone-alt"></i>
            </span>
            <ItemList items={items} />
          </div>
          <div class="col-md align-self-center" style={colItems}>
            <span style={microIcon}>
              <i class="fas fa-volume-up"></i>
            </span>
            <ItemList items={items} />
          </div>
          <div class="col-md align-self-center" style={colItems}>
            <span style={microIcon}>
              <i class="fas fa-guitar"></i>
            </span>
            <ItemList items={items} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rider;
