import React from "react";
import "antd/dist/antd.css";
import { Steps } from "antd";

function Antd(props) {
  const { Step } = Steps;
  return (
    <Steps direction="horizontal" size="large" current={props.currentStep}>
      <Step title="Personal Info" description="" />
      <Step title="Business Info" description="" />
      <Step title="Payment Info" description="" />
      <Step title="Submission" description="" />
      {/* <Step title="Submission" description="" /> */}
    </Steps>
  );
}

export default Antd;
