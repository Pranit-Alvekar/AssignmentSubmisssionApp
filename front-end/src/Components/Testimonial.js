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
          The Code Inspector app is a comprehensive platform designed to
          streamline the process of submitiing, reviewing and managing
          assignments within an educational context. The app provides students
          with a user-friendly dashboard that highlights ongoing reviews and
          passed submissions.
        </p>
      </div>
      <div className="d-flex justify-content-between testimonial-row">
        <div className="testimonial-section-bottom">
          <img src={vivek} alt="" />
          <p>
            Working in a team was a great experience that provided me with
            valuable exposure to various technologies. Through hands-on
            practical work, I was able to enhance my understanding and skills.
          </p>

          <h2>Vivek Dalvi</h2>
        </div>

        <div className="testimonial-section-bottom">
          <img src={ash} alt="" />
          <p>
            Working in a team was a great experience that provided me with
            valuable exposure to various technologies. Through hands-on
            practical work, I was able to enhance my understanding and skills.
          </p>

          <h2>Ashish Sharma</h2>
        </div>
      </div>

      <div className="d-flex justify-content-between testimonial-row">
        <div className="testimonial-section-bottom">
          <img src={pranit} alt="" />
          <p>
            PPT Designer and Document developer of the group.Through hands-on
            practical work, I was able to enhance my understanding and skills.
          </p>

          <h2>Pranit Alvekar</h2>
        </div>

        <div className="testimonial-section-bottom">
          <img src={vivek1} alt="" />
          <p>
            Vidarbh Express. Potta.PPT Designer and Document developer of the
            group.Through hands-on practical work, I was able to enhance my
            understanding and skills.
          </p>

          <h2>Vivek Gomase</h2>
        </div>
      </div>
      <div className="d-flex justify-content-between testimonial-row">
        <div className="testimonial-section-bottom">
          <img src={yogi} alt="" />
          <p>
            Aspiring UI/UX CSS developer from Kolhapur. Very Less important part
            of this project PPT Designer and Document developer of the
            group.Through hands-on practical work, I was able to enhance my
            understanding and skills.
          </p>

          <h2>Yogesh Gejege</h2>
        </div>

        <div className="testimonial-section-bottom">
          <img src={manish} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>

          <h2>Manish Pandey</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
