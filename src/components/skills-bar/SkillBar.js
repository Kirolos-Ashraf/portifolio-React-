import React from "react";
import "./SkillBar.css";

export default function SkillBar(props) {
  return (
    <>
      
        <div className="main d-flex mb-4 ">
          <h2 className="fw-bold inline-block fs-4">{props.title}</h2>
          <div className="bar-main inline-block">
            <div
              className="bar inline-block"
              style={{
                width: props.barWidth,
              }}
            ></div>
          </div>
        </div>
      
    </>
  );
}
