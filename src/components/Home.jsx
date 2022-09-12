import React from "react";

export default function Home() {
  return (
    <>
      <section className="home py-5 d-flex align-items-center" id="header">
        <div className="container text-light py-5" style={{ marginTop: "10%" }}>
          <h1 className="headline">
            Hye! <span className="home_text">I am Saqib Ansari</span>
          </h1>
          <h1>Software Engineer</h1>
          <p className="para para-light py-3">
            I am a student studying Becholars in Computer Science at Comsats
            University Islamabad (Lahore Campus). I have experience in Mern
            Stack Development, Mobile App Development (React Native) and basics
            like HTML5, CSS, BOOTSTRAP. I have also little bit knowledge about
            Wordpress and Shopify.
          </p>
          <div className="d-flex align-items-center">
            <p className="p-2">
              <i className="fas fa-laptop-house fa-lg"></i>
            </p>
            <p>Wanna know more About me?</p>
          </div>

          <div className="my-3">
            <button className="btn">
              <a style={{ color: "white" }} href="#about">
                {" "}
                View Me
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
