import React from "react";
import CustomCard from "./CustomCard";
import ReqBox from "./plans/ReqBox";
import CustomButton from "./CustomButton";

export default function Plans() {
  const planData = [
    {
      title: "BASIC BUNDLE",
      heading: "Static Website with 3 pages",
      duration: "$10/4 days",
      buttonText: "Explore More",
      req: "Landing Page with all button accessible",
      req1: "2 more pages with all requirements",
    },
    {
      title: "MIDDLE BUNDLE",
      heading: "Responsive Websiite with 3 pages",
      duration: "$20/a Week",
      buttonText: "Explore More",
      req: "Landing page with all functionality",
      req1: "Responsive Design",
      req2: "plugins attached",
    },
    {
      title: "MASTER BUNDLE",
      heading: "Complete Responsive Website",
      duration: "$50/2 Weeks",
      buttonText: "Explore More",
      req: "Landing page with all functionality",
      req1: "Responsive Design",
      req2: "plugins attached",
      req3: "Customized Result",
    },
  ];
  return (
    <>
      <section className="plans d-flex align-items-center" id="plans">
        <div className="container text-light">
          <CustomCard
            title="OUR PLANS"
            heading="Build Your Website with us!"
            content="Explore unlimited possibilities"
          />
          <div className="row gy-4">
            {planData.map((item, index) => {
              return (
                <ReqBox
                  key={index}
                  title={item.title}
                  heading={item.heading}
                  req1={item.req}
                  req2={item.req1}
                  req3={item.req2}
                  req4={item.req3}
                  buttonText={item.buttonText}
                  duration={item.duration}
                />
              );
            })}
          </div>
          <CustomButton text="Explore More Plans" />
        </div>
      </section>
    </>
  );
}
