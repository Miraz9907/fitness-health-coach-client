import React from "react";
import bmi from '../assests/images/bmi.jpg'
const Challenges = () => {

  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <p className=" text-2xl font-bold text-orange-600">
            {" "}
           Always stay fit
          </p>
          <h1 className="my-5 text-5xl font-bold">
            Try to maintain Your BMI- Body Mass Index.
          </h1>
          <p className="py-3">
          Body Mass Index (BMI) is a person's weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual.
{" "}
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
            src={bmi}
            alt=""
            className="w-100 h-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
    
  );
};

export default Challenges;
