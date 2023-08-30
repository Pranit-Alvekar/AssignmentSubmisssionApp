import React from "react";
import yogi from "../Assets/yogi.png";
import vivek from "../Assets/vivek.png";
import vivek1 from "../Assets/vivek1.png";
import manish from "../Assets/manish.png";
import pranit from "../Assets/pranit.png";
import ash from "../Assets/ashish.png";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Team</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          From our 6-month PGDAC course at CDAC ACTS, we skillfully employed
          diverse tech stacks to create the user-friendly Code Inspector app. It
          streamlines assignment processes and owes gratitude to our faculty for
          guidance. The app provides students an intuitive dashboard for
          tracking reviews and successful submissions.
        </p>
      </div>
      <div className="d-flex justify-content-between testimonial-row">
        <div className="testimonial-section-bottom">
          <img src={vivek} alt="" />
          <p>
            Participating in a team environment was an invaluable experience,
            affording me exposure to a wide array of technologies. My active
            engagement in backend Spring Boot development, security
            implementation, and JWT integration played a pivotal role in honing
            my expertise and knowledge.
          </p>

          <h2>Vivek Dalvi</h2>
        </div>

        <div className="testimonial-section-bottom">
          <img src={ash} alt="" />
          <p>
            Participating in the development of an assignment submission app was
            an enriching journey that allowed me to delve into diverse
            programming languages and tools. Engaging in real-time coding and
            problem-solving amplified my comprehension and proficiency in
            software development.
          </p>

          <h2>Ashish Sharma</h2>
        </div>
      </div>

      <div className="d-flex justify-content-between testimonial-row">
        <div className="testimonial-section-bottom">
          <img src={pranit} alt="" />
          <p>
            Participating in the development of the code inspector app exposed
            me to the intricacies of code analysis and debugging tools. The
            collaborative environment taught me how to effectively communicate
            complex technical ideas with team members.
          </p>

          <h2>Pranit Alvekar</h2>
        </div>

        <div className="testimonial-section-bottom">
          <img src={vivek1} alt="" />
          <p>
            Collaborative teamwork illuminated the significance of adaptability
            based on user requirements. Immersive participation enabled me to
            refine my problem-solving skills and comprehend the integration of
            backend and frontend technologies.
          </p>

          <h2>Vivek Gomase</h2>
        </div>
      </div>
      <div className="d-flex justify-content-between testimonial-row">
        <div className="testimonial-section-bottom">
          <img src={yogi} alt="" />
          <p>
            Contributing to the code inspector app enabled me to grasp the
            significance of automated code reviews and performance analysis.
            Working closely with teammates improved my ability to comprehend and
            implement advanced algorithms.
          </p>

          <h2>Yogesh Gejege</h2>
        </div>

        <div className="testimonial-section-bottom">
          <img src={manish} alt="" />
          <p>
            Practical experience proved instrumental in advancing my
            understanding of software architecture and enhancing my proficiency
            in interpreting complex codebases. Through practical involvement, I
            honed my coding abilities and learned about database management.
          </p>

          <h2>Manish Pandey</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
