import React from "react";
import CustomButton from "./CustomButton";
import CustomCard from "./CustomCard";
import ServiceBox from "./serviceBox";

export default function Services() {
  return (
    <>
      <section
        className=" services d-flex align-items-center py-5"
        id="services"
      >
        <div className="container text-light">
          <CustomCard
            title="OUR SERVICES"
            heading="Explore unlimited possibilities"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              asperiores, quia accusantium sunt corporis optio recusandae?
              Nostrum libero pariatur cumque, ipsa dolores voluptatibus
              voluptate alias sit fuga. Itaque, ea quo."
          />
          <CustomButton text="Explore More Service Titles" />
          <div className="row gy-4 py-2">
            <ServiceBox
              icon="fas fa-home fa-2x"
              title="React Native App"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam odit consequatur doloribus natus in suscipit!"
            />
            <ServiceBox
              icon="fas fa-wifi fa-2x"
              title="Responsive Website Using React"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam odit consequatur doloribus natus in suscipit!"
            />
            <ServiceBox
              icon="fas fa-tv fa-2x"
              title="Build your Website using Wordpress"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam odit consequatur doloribus natus in suscipit!"
            />
            <ServiceBox
              icon="fas fa-laptop fa-2x"
              title="Build your Design on Figma"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam odit consequatur doloribus natus in suscipit!"
            />
            <ServiceBox
              icon="fas fa-chair fa-2x"
              title="Best Logo Maker"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam odit consequatur doloribus natus in suscipit!"
            />
            <ServiceBox
              icon="fas fa-phone fa-2x"
              title="Full Backend and Responsive Frontend"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam odit consequatur doloribus natus in suscipit!"
            />
          </div>
        </div>
      </section>
    </>
  );
}
