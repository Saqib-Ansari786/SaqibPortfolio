import React from "react";
import LocationCard from "./location/LocationCard";

export default function Location() {
  return (
    <>
      <section className="location text-light py-5">
        <div className="container">
          <div className="row">
            <LocationCard
              icon="far fa-map fa-3x"
              title="ADDRESS"
              content="Sabzazar Lahore"
            />
            <LocationCard
              icon="fas fa-phone fa-3x"
              title="CONTACT ME"
              content="+92 321 8875200"
            />
            <LocationCard
              icon="fas fa-table fa-3x"
              title="SEND US MESSAGE"
              content="saqib.ns111@gmail.com"
            />
            <LocationCard
              icon="far fa-clock fa-3x"
              title="AVAILABLE TIME"
              content="I am available everytime"
            />
          </div>
        </div>
      </section>
    </>
  );
}
