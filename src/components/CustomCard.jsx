import React from "react";

export default function CustomCard(props) {
  return (
    <div className="text-center pb-4">
      <p>{props.title}</p>
      <h2 className="py-2">{props.heading}</h2>
      <p className="para-light">{props.content}</p>
    </div>
  );
}
