import { Button, Input } from "antd";
import React from "react";

const ContactUs = () => {
  const { TextArea } = Input;
  return (
    <div className="contact_container">
      <div className="contact_content">
        <div className="contact_background"></div>
        <div className="contact_form">
          <h2>Contact Us</h2>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <TextArea rows={4} placeholder="Please leave a Query" maxLength={6} />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
