import React from "react";

export default function BackToTopButton() {
  return (
    <>
      <a href="#header">
        <button
          className=" btn-secondary text-light"
          style={{ marginLeft: "50px" }}
        >
          <i className="fas fa-arrow-up fa-lg"></i>
        </button>
      </a>
    </>
  );
}
