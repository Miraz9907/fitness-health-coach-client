import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen"
      style={{ backgroundImage: `url("https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="text-white">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Health Coach</h1>
          <p className="mb-5">
            My Goal is to create an environment where you will forgat about crowed and noice. You will enjoy home like an environment, cozy, comfortable atmosphere and total dedication. You want to take the class and from me you will get the confirmation. So, Book your appointment online or cancel it same way.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
