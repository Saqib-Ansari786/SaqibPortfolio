import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Zoom,
  EffectFlip,
  EffectCube,
  EffectCards,
  EffectCoverflow,
} from "swiper";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/zoom";
// import "swiper/css/effect-flip";
// import "swiper/css/effect-cube";
import "swiper/css/bundle";

export default function Testimonials() {
  return (
    <>
      <div className="slider-1 testimonial text-light d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="text-center w-lg-75 m-auto pb-4">
              <p>TESTIMONIALS</p>
              <h2 className="py-2">What Our Clients Says</h2>
              <p className="para-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci esse facilis vel, neque ipsa mollitia impedit, commodi
                ab illo dignissimos, voluptatum quae amet sed tenetur dolores
                reprehenderit laudantium quo sint.
              </p>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-lg-12">
              <div className="slider-container">
                <Swiper
                  modules={[
                    Autoplay,
                    Navigation,
                    Pagination,
                    Zoom,
                    EffectFlip,
                    EffectCube,
                    EffectCards,
                    EffectCoverflow,
                  ]}
                  spaceBetween={50}
                  slidesPerView={3}
                  zoom={true}
                  autoplay={true}
                  effect="coverflow"
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  <div className="swiper-container card-slider">
                    <div className="swiper-wrapper">
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="testimonial-card p-4">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Laboriosam commodi officia
                              laborum qui iste quidem!
                            </p>

                            <div className="d-flex pt-4">
                              <div>
                                <img
                                  className="avatar"
                                  src="./assets/images/testimonial-1.jpg"
                                  alt="testimonial"
                                />
                              </div>
                              <div className="ms-3 pt-2">
                                <h6>Marlene Visconte</h6>
                                <p>General Manager - Scouter</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="testimonial-card p-4">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Laboriosam commodi officia
                              laborum qui iste quidem!
                            </p>
                            <div className="d-flex pt-4">
                              <div>
                                <img
                                  className="avatar"
                                  src="./assets/images/testimonial-2.jpg"
                                  alt="testimonial"
                                />
                              </div>
                              <div className="ms-3 pt-2">
                                <h6>John Spiker</h6>
                                <p>Team Leader - Vanquish</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="testimonial-card p-4">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Laboriosam commodi officia
                              laborum qui iste quidem!
                            </p>
                            <div className="d-flex pt-4">
                              <div>
                                <img
                                  className="avatar"
                                  src="./assets/images/testimonial-3.jpg"
                                  alt="testimonial"
                                />
                              </div>
                              <div className="ms-3 pt-2">
                                <h6>Stella Virtuoso</h6>
                                <p>Design Chief - Upscale</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="testimonial-card p-4">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Laboriosam commodi officia
                              laborum qui iste quidem!
                            </p>
                            <div className="d-flex pt-4">
                              <div>
                                <img
                                  className="avatar"
                                  src="./assets/images/testimonial-4.jpg"
                                  alt="testimonial"
                                />
                              </div>
                              <div className="ms-3 pt-2">
                                <p>Mike tim</p>
                                <p>Investor - TechGroww</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>

                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
