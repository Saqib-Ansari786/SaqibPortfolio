import React from "react";
import BackToTopButton from "./BackToTopButton";

export default function FooterBottom() {
  return (
    <>
      {/* <!-- Bottom --> */}
      <div class="bottom py-2 text-light">
        <div class="container d-flex justify-content-between">
          <div>
            <p>Copyright © Saqib Ansari</p>
            <p>
              Developed by:{" "}
              <a href="https://github.com/Saqib-Ansari786">Saqib Ansari</a>
            </p>
          </div>
          <div>
            <i class="fab fa-cc-visa fa-lg p-1"></i>
            <i class="fab fa-cc-mastercard fa-lg p-1"></i>
            <i class="fab fa-cc-paypal fa-lg p-1"></i>
            <i class="fab fa-cc-amazon-pay fa-lg p-1"></i>
            <BackToTopButton />
          </div>
        </div>
      </div>
    </>
  );
}
