import React from "react";
import { Card } from "antd";
import {
  MobileOutlined,
  DesktopOutlined,
  HighlightOutlined,
  CloudOutlined,
  TeamOutlined,
  RobotOutlined,
} from "@ant-design/icons";

const Services = () => {
  return (
    <div className="servicesPage_container">
      <div className="servicesPage_heading">
        <h2>Services</h2>
      </div>
      <div className="servicesPage_card_container_upper">
        <Card style={{ width: 400 }} bordered={false}>
          <div className="servicesPage_card_icon_container">
            <span class="servicesPage_card_icon_background"></span>
            <MobileOutlined />
          </div>
          <div className="servicesPage_card_heading">
            <p>Mobile App Development</p>
          </div>
          <div className="servicesPage_card_paragraph">
            <p>iOS Developement</p>
            <p>Android Developement</p>
            <p>React Native Developement</p>
          </div>
        </Card>
        <Card style={{ width: 400 }} bordered={false}>
          <div className="servicesPage_card_icon_container">
            <span class="servicesPage_card_icon_background"></span>
            <DesktopOutlined />
          </div>
          <div className="servicesPage_card_heading">
            <p>Web Development</p>
          </div>
          <div className="servicesPage_card_paragraph">
            <p>Frontend Development</p>
            <p>Backend Development</p>
            <p>Fullstack Development</p>
          </div>
        </Card>
        <Card style={{ width: 400 }} bordered={false}>
          <div className="servicesPage_card_icon_container">
            <span class="servicesPage_card_icon_background"></span>
            <HighlightOutlined />
          </div>
          <div className="servicesPage_card_heading">
            <p>UI/UX Designs</p>
          </div>
          <div className="servicesPage_card_paragraph">
            <p>ProtoTyping</p>
            <p>Interface Design</p>
            <p>Interaction Design</p>
          </div>
        </Card>
      </div>
      <div className="servicesPage_card_container_lower">
        <Card style={{ width: 400 }} bordered={false}>
          <div className="servicesPage_card_icon_container">
            <span class="servicesPage_card_icon_background"></span>
            <CloudOutlined />
          </div>
          <div className="servicesPage_card_heading">
            <p>Cloud Computing</p>
          </div>
          <div className="servicesPage_card_paragraph">
            <p>Cloud App Developement</p>
            <p>Cloud Integration</p>
            <p>Cloud Security</p>
          </div>
        </Card>
        <Card style={{ width: 400 }} bordered={false}>
          <div className="servicesPage_card_icon_container">
            <span class="servicesPage_card_icon_background"></span>
            <TeamOutlined />
          </div>
          <div className="servicesPage_card_heading">
            <p>Emerging Technologies</p>
          </div>
          <div className="servicesPage_card_paragraph">
            <p>IOT App Developement</p>
            <p>Wearable App Development</p>
            <p>iBeacon App Development</p>
          </div>
        </Card>
        <Card style={{ width: 400 }} bordered={false}>
          <div className="servicesPage_card_icon_container">
            <span class="servicesPage_card_icon_background"></span>
            <RobotOutlined />
          </div>
          <div className="servicesPage_card_heading">
            <p>AI & Data Analytics</p>
          </div>
          <div className="servicesPage_card_paragraph">
            <p>Artificial Intelligence</p>
            <p>Data Analytics</p>
            <p>Machine Learning</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Services;
