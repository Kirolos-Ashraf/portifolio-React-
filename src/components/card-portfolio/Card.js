import React from "react";
import "./Card.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Card(props) {
  return (
    <>
      <div
        className="card w-75 lh-50 h-12rem mx-auto" 
        style={ { backgroundColor: props.bgColor }}
      >
        <div className="card-body d-flex justify-content-center align-items-center ">
          <h5 className="card-title border-bottom text-white pb-2">{props.title}</h5>
        </div>
      </div>
    </>
  );
}
