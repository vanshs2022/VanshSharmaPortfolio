import React from "react";

const Marquee = ({name}) => {
  return (
    <div>
      <div className="wrapper">
        <div className="itemLeft item1">{name}</div>
        <div className="itemLeft item2">{name}</div>
        <div className="itemLeft item3">{name}</div>
        <div className="itemLeft item4">{name}</div>
        <div className="itemLeft item5">{name}</div>
        <div className="itemLeft item6">{name}</div>
        <div className="itemLeft item7">{name}</div>
        <div className="itemLeft item8">{name}</div>
      </div>
    </div>
  );
};

export default Marquee;
