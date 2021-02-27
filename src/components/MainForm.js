import React, { Component } from "react";
import Personal from "./Personal";
import Payment from "./Payment";
import Business from "./Business";
import SubmitForm from "./SubmitForm";
//import Submit from "./Submit";
import Antd from "./Antd/Antd";

class MainForm extends Component {
  state = {
    step: 1,
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    zip: "",
    city: "",
    state: "",
    country: "",
    industryType: "",
    newStreet: "",
    newZip: "",
    newCity: "",
    newState: "",
    newCountry: "",
    newIndustryType: "",
    telephone: "",
    teleNumber: "",
    businessName: "",
    checked: false,
    bankName: "",
    routingNumber: null,
    accountNumber: null,
    cardNumber: null,
    expiryDate: null,
    securityCode: null,
    paymentType: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value
    });
  };

  checkedHandler = (e) => {
    console.log(this.state.checked);
    this.setState({
      checked: !this.state.checked
    });
    console.log(this.state.checked);
  };

  render() {
    const { step } = this.state;
    const {
      userName,
      firstName,
      lastName,
      email,
      street,
      zip,
      city,
      state,
      country,
      industryType,
      newStreet,
      newZip,
      newCity,
      newState,
      newCountry,
      newIndustryType,
      telephone,
      teleNumber,
      businessName,
      checked,
      bankName,
      routingNumber,
      accountNumber,
      cardNumber,
      expiryDate,
      securityCode,
      paymentType
    } = this.state;

    const values = {
      userName,
      firstName,
      lastName,
      email,
      street,
      zip,
      city,
      state,
      country,
      industryType,
      newStreet,
      newZip,
      newCity,
      newState,
      newCountry,
      newIndustryType,
      telephone,
      teleNumber,
      businessName,
      checked,
      bankName,
      routingNumber,
      accountNumber,
      cardNumber,
      expiryDate,
      securityCode,
      paymentType
    };

    switch (step) {
      case 1:
        return (
          <div>
            <Antd currentStep={step - 1} />
            <br />
            <Personal
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <Antd currentStep={step - 1} />
            <br />
            <Business
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              checkedHandler={this.checkedHandler}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <Antd currentStep={step - 1} />
            <br />
            <Payment
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <Antd currentStep={step - 1} />
            <br />
            <SubmitForm
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              values={values}
            />
          </div>
        );
      // case 4:
      //   return (
      //     <div>
      //       <Antd currentStep={step - 1} />
      //       <br />
      //       <Submit prevStep={this.prevStep} values={values} />
      //     </div>
      //   );
      default:
        return null;
    }
  }
}

export default MainForm;
