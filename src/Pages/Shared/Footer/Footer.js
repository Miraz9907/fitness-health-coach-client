import React from "react";
import logo from "../../../assests/images/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer p-32 bg-black text-white mt-6">
      <div>
        <img src={logo} className="rounded-3xl h-32" alt="" />
        <p>
          Health Coach
          <br />
          Providing reliable Fitness training program. 
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a href="/" className="link link-hover">
          Yoga
        </a>
        <a href="/" className="link link-hover">
          Workout Routing
        </a>
        <a href="/" className="link link-hover">
          Diet Selection
        </a>
        <a href="/" className="link link-hover">
          weight loss
        </a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="/" className="link link-hover">
          About us
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
        <a href="/" className="link link-hover">
          Jobs
        </a>
        <a href="/" className="link link-hover">
          Press kit
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="/" className="link link-hover">
          Terms of use
        </a>
        <a href="/" className="link link-hover">
          Privacy policy
        </a>
        <a href="/" className="link link-hover">
          Cookie policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
