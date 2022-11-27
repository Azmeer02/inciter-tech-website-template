import React from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_image_container">
        <div className="footer_background"></div>
        <div className="footer_content_container">
          <div className="footer_logo_container">
            <img src="/assets/logo02.png" alt="Footer Logo" />
            <div className="footer_social_icons">
              <LinkedinOutlined />
              <GithubOutlined />
              <FacebookOutlined />
              <WhatsAppOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
