import React from "react";
import trainer from "../../assests/images/trainer.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <p className=" text-2xl font-bold text-green-600">
            {" "}
            a few words about me
          </p>
          <h1 className="my-5 text-5xl font-bold">
            I am qualified <br /> of experience <br /> and Certified <br /> in
            this field
          </h1>
          <p className="py-3">
            I am the creator of this health coach training program. I am
            qualified with more then 5 years of experiences And with 4
            certificates.{" "}
          </p>
          <p className="py-3">
            If you want something you've never had, you must be willing to do
            something you've never done.” “The body achieves what the mind
            believes.” “Once you are exercising regularly, the hardest thing is
            to stop it.
          </p>
          <button className="btn btn-primary">Get more Info</button>
        </div>
        <div className="w-1/2 relative">
          <img
            src={trainer}
            alt=""
            className="w-100 h-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
