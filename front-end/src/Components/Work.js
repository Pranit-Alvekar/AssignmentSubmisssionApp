import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Code",
      text: "feature allows students to submit assignments effortlessly by providing a GitHub link and branch.",
    },
    {
      image: ChooseMeals,
      title: "Submit",
      text: "empowers students to efficiently submit assignments while enabling iterative feedback from reviewers.",
    },
    {
      image: DeliveryMeals,
      title: "Get Reviewed",
      text: "feature facilitates collaboration, transparency and enriching the educational experience.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Across a span of 14 assignments, students kickstart the process by
          submitting their work, subsequently allowing reviewers to access,
          evaluate, and contribute valuable feedback and collaborative comments
          to facilitate iterative enhancements.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
