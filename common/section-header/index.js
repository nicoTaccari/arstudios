import React from "react";

const SectionHeader = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="row justify-content-center mb-5">
      <div className="col-md-8 text-center mb-5">
        <h2 className="text-uppercase heading border-bottom mb-4">{title}</h2>
        <p className="mb-0 lead">{subtitle}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
