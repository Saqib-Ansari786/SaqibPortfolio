import React from "react";
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";

function SocialLinks(props) {
  return (
    <div className="me-3">
      <a href={props.link}>
        <i className={props.icon}></i>
      </a>
    </div>
  );
}

function CustomLinks(props) {
  return (
    <div className="d-flex align-items-center py-2">
      <i className="fas fa-caret-right"></i>
      <a href={props.link}>
        <p className="ms-3">{props.text}</p>
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <section className="footer text-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 py-4 py-md-5">
              <div className="d-flex align-items-center">
                <h4 className="">SAQIB</h4>
              </div>
              <p className="py-3 para-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                animi repudiandae explicabo esse maxime, impedit rem
                voluptatibus amet error quas.
              </p>
              <div className="d-flex">
                <SocialLinks
                  link="https://www.facebook.com/saqibansari.official"
                  icon="fab fa-facebook-f fa-2x py-2"
                />
                <SocialLinks
                  link="#your-link"
                  icon="fab fa-twitter fa-2x py-2"
                />
                <SocialLinks
                  link="https://www.instagram.com/saqibansari.official/?hl=en"
                  icon="fab fa-instagram fa-2x py-2"
                />
                <SocialLinks
                  link="https://www.linkedin.com/in/saqib-ali-161065242/"
                  icon="fab fa-linkedin fa-2x py-2"
                />
                <SocialLinks
                  link="https://github.com/Saqib-Ansari786"
                  icon="fab fa-github fa-2x py-2"
                />
              </div>
            </div>

            <div className="col-lg-3 py-4 py-md-5">
              <div>
                <h4 className="py-2">Quick Links</h4>
                <CustomLinks link="#about" text="About" />
                <CustomLinks link="#services" text="Services" />
                <CustomLinks link="#plans" text="Plans" />
                <CustomLinks link="#contact" text="Contact" />
              </div>
            </div>

            <div className="col-lg-3 py-4 py-md-5">
              <div>
                <h4 className="py-2">Useful Links</h4>
                <div className="d-flex align-items-center py-2">
                  <i className="fas fa-caret-right"></i>
                  <Link to={"/privacy"}>
                    <p className="ms-3">Privacy</p>
                  </Link>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i className="fas fa-caret-right"></i>
                  <Link to={"/terms"}>
                    <p className="ms-3">Terms & Conditions</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 py-4 py-md-5">
              <div className="d-flex align-items-center">
                <h4>Newsletter</h4>
              </div>
              <p className="py-3 para-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam, ab.
              </p>
              <div className="d-flex align-items-center">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Enter Email"
                    aria-label="Recipient's email"
                  />
                  <button className="btn-secondary text-light">
                    <i className="fas fa-envelope fa-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterBottom />
    </>
  );
}
