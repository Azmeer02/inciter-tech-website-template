import React from "react";

const NavigationBar = () => {
  return (
    <div className="navigation_container">
      <div className="navigation_list">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>
            <img src="/assets/logo02.png" alt="logo" />
          </li>
          <li>Testimonials</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
