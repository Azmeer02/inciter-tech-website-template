import React from "react";
import { Card } from "antd";
import {
  RocketOutlined,
  DeploymentUnitOutlined,
  SlidersOutlined,
} from "@ant-design/icons";

const Expertees = () => {
  return (
    <div className="expertees_container">
      <div className="expertees_heading">
        <h2>Expertees</h2>
      </div>
      <div className="expertees_card_container">
        <Card style={{ width: 400 }}>
          <div className="expertees_card_icon_container">
            <span class="expertees_card_icon_background"></span>
            <DeploymentUnitOutlined spin />
          </div>
          <div className="expertees_card_heading">
            <p>App Development</p>
          </div>
          <div className="expertees_card_paragraph">
            <p>
              We have expertise in choosing what’s a best solution for your web
              and mobile app development strategy. Create robust, secure, custom
              web application with high scalability.
            </p>
          </div>
        </Card>
        <Card style={{ width: 400 }}>
          <div className="expertees_card_icon_container">
            <span class="expertees_card_icon_background"></span>
            <RocketOutlined spin style={{ color: "#fe4c1c" }} />
          </div>
          <div className="expertees_card_heading">
            <p>Devops Solution</p>
          </div>
          <div className="expertees_card_paragraph">
            <p>
              Communicate, collaborate, integrate towards automation removing
              hurdles in software development and ensuring swift and agile
              delivery.
            </p>
          </div>
        </Card>
        <Card style={{ width: 400 }}>
          <div className="expertees_card_icon_container">
            <span class="expertees_card_icon_background"></span>
            <SlidersOutlined spin />
          </div>
          <div className="expertees_card_heading">
            <p>AI & Data Analytics</p>
          </div>
          <div className="expertees_card_paragraph">
            <p>
              Expand & grow in this ever changing digital era of machine
              learning, artificial intelligence and smart cities where users are
              expecting their day to day activities to be done online.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Expertees;
