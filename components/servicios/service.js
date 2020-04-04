import React from "react";

const backImage = image => {
  return {
    backgroundImage: "url(" + image + ")"
  };
};

export const Service = props => {
  return (
    <div className="block-3 d-md-flex">
      <div
        className={props.right ? "image order-2" : "image"}
        style={backImage(props.image)}
      ></div>
      <div className="text">
        <h4 className="subheading">Illustration</h4>
        <h2 className="heading">
          Even the all-powerful Pointing has no control
        </h2>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
      </div>
    </div>
  );
};
