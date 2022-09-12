import React from "react";

export default function Work() {
  return (
    <>
      <section className="work d-flex align-items-center py-5">
        <div className="container-fluid text-light">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <img
                className="img-fluid"
                src="./assets/images/work.jpg"
                style={{ borderRadius: 50, opacity: "80%" }}
                alt="work"
              />
            </div>
            <div className="col-lg-5 d-flex align-items-center px-4 py-3">
              <div className="row">
                <div className="text-center text-lg-start py-4 pt-lg-0">
                  <p>OUR WORK</p>
                  <h2 className="py-2">Explore unlimited possibilities</h2>
                  <p className="para-light">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dignissimos dicta mollitia totam explicabo obcaecati quia
                    laudantium repudiandae.
                  </p>
                </div>
                <div className="container">
                  <div className="row g-5">
                    <div className="col-6 text-start">
                      <i className="fas fa-briefcase fa-2x text-start"></i>
                      <h2 className="purecounter">5</h2>
                      <p>PROJECTS COMPLETED</p>
                    </div>
                    <div className="col-6">
                      <i className="fas fa-award fa-2x"></i>
                      <h2 className="purecounter">10</h2>
                      <p>AWARDS</p>
                    </div>
                    <div className="col-6">
                      <i className="fas fa-users fa-2x"></i>
                      <h2 className="purecounter">1</h2>
                      <p>CUSTOMER ACTIVE</p>
                    </div>
                    <div className="col-6">
                      <i className="fas fa-clock fa-2x"></i>
                      <h2 className="purecounter">5</h2>
                      <p>GOOD REVIEWS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
