import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <div className="navigation_container">
      <div className="navigation_list">
        <ul>
          <Link href="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link href="/services" style={{ textDecoration: "none" }}>
            <li>Services</li>
          </Link>
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
