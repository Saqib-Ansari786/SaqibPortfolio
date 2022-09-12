import React from "react";

export default function CustomButton(props) {
  return (
    <div class="text-center py-1 pb-3">
      <a class="btn" href="#your-link">
        {props.text}
      </a>
    </div>
  );
}
