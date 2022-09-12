import React from "react";
import Requirement from "./Requirement";

export default function ReqBox(props) {
  console.log(props);
  return (
    <div className="col-lg-4">
      <div className="card bg-transparent px-4">
        <h4 className="py-2">{props.title}</h4>
        <p className="py-3">{props.heading}</p>

        {props.req1 && <Requirement content={props.req1} />}
        {props.req2 && <Requirement content={props.req2} />}
        {props.req3 && <Requirement content={props.req3} />}
        {props.req4 && <Requirement content={props.req4} />}

        <h4 className="py-3">{props.duration}</h4>
        <div className="my-3">
          <a className="btn" href="#your-link">
            {props.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
