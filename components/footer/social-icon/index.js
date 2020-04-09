import React from "react";

const Icon = (props) => {
  const { isBrand, name, color } = props;
  const iconName = (isBrand ? "fab " : "fas ") + name + " fa-2x social-icon";
  const style = {
    color: color,
  };
  return (
    <span>
      <i className={iconName} style={style}></i>
    </span>
  );
};

export default Icon;
