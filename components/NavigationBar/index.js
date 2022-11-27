import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <div className="navigation_container">
      <div className="navigation_list">
        <div>
          <Link href="/" >
            Home
          </Link>
          <Link href="/services" >
            Services
          </Link>
        </div>
        <span><img src="/assets/logo02.png" alt="logo" /></span>
        <div>
          <Link href="/" >
            Testimonials
          </Link>
          <Link href="/" >
            Contact Us
          </Link>
        </div>
        {/* <ul>
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
        </ul> */}
      </div>
    </div>
  );
};

export default NavigationBar;
