import React from "react";
import CustomButton from "./CustomButton";
import CustomCard from "./CustomCard";
import InfoBox from "./InfoBox";

export default function Info() {
  return (
    <>
      <section className="information text-light py-2 ">
        <CustomCard
          title="OUR BLOGS"
          heading="Intresting blogs which you find helpful"
        />

        <div className="container-fluid">
          <div className="row text-light">
            <InfoBox
              class={"col-lg-4 text-center p-5"}
              icon={"fas fa-tachometer-alt fa-3x p-2"}
              title={"Mobile App Development"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!"
              }
            />
            <InfoBox
              class={"col-lg-4 text-center p-5"}
              icon={"fas fa-clock fa-3x p-2"}
              title={"Mern Stack Development"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!"
              }
            />
            <InfoBox
              class={"col-lg-4 text-center p-5 text-dark"}
              icon={"fas fa-headset fa-3x p-2"}
              title={"UI/UX Designer"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!"
              }
            />
          </div>
        </div>
        <CustomButton text="More Blogs" />
      </section>
    </>
  );
}
