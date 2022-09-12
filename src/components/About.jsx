import React from "react";
import { fadeIn, fadeInLeft } from "react-animations";
import { StyleSheet, css } from "aphrodite";

export default function About() {
  const styles = StyleSheet.create({
    fadeIn: {
      animationName: fadeIn,
      animationDuration: "2s",
    },
    fadeInleft: {
      animationName: fadeInLeft,
      animationDelay: "2s",
      animationIterationCount: "infinite",
    },
  });
  return (
    <>
      <section
        class="about d-flex align-items-center text-light py-5"
        id="about"
      >
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-7" style={styles.fadeInleft}>
              <p>ABOUT US</p>
              <h1>SAQIB ANSARI </h1>
              <h1>
                <span className="home_text">Software Engineer</span>
              </h1>
              <p class="py-2 para-light">
                Saqib, a BSCS student, IT evangelist and an entrepreneur from
                Pakistan! Working on building and providing IT digital
                solutions, and services including custom software, marketplace,
                website design and development, Mobile App development. Saqib
                have worked on react native projects (UI design with strappi
                connection), developed c++ projects on beginners level and
                design website (HTML, CSS, Bootstrap). Some fun-facts: A
                perfectionist and a very detail-oriented person! Believing in
                crystal-clear communication, high visibility and transparency
                always. Unable to ignore a single typo, no matter how minor a
                thing, just can't unsee it till it is corrected or fixed ASAP!
                And, always open to challenge(s) anywhere, anytime!😉
              </p>

              <div class="my-3">
                <a class="btn" href="#your-link">
                  Learn More
                </a>
              </div>
            </div>
            <div class="col-lg-5 text-center py-4 py-sm-0">
              <img
                class="img-fluid"
                src="./assets/images/saqib.png"
                alt="about"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
