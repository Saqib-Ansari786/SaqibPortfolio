import React from "react";

export default function NewsLetter() {
  return (
    <>
      <section className="newsletter text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-start">
              <h4 className="py-1">Subscribe to our Newsletter</h4>
              <p className="para-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                deleniti nobis amet accusamus debitis facilis quibusdam officia
                laborum nesciunt. Nihil.
              </p>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Enter your email address"
                  aria-label="Recipient's email"
                />
                <button className="btn-secondary text-light" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
