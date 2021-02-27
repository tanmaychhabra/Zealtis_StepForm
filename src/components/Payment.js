import React, { Component } from "react";
import ECheck from "./PaymentOptions/ECheck";
import CreditDebit from "./PaymentOptions/CreditDebit";

class Payment extends Component {
  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  switchHandler = (payType, values, handleChange) => {
    switch (payType) {
      case "eCheck":
        return (
          <>
            <h2>Enter Your ECheck details: </h2>
            <ECheck values={values} handleChange={handleChange} />
          </>
        );
      case "Credit / Debit Card":
        return (
          <>
            <h2>Enter Your Credit / Debit Card Details:</h2>
            <CreditDebit values={values} handleChange={handleChange} />
          </>
        );
      default:
        return null;
    }
  };
  render() {
    const { values, handleChange } = this.props;
    const prevStyle = {
      color: "white",
      backgroundColor: "red",
      padding: "auto",
      border: "none",
      margin: "25px 25px",
      height: "33px"
    };

    const nextStyle = {
      color: "white",
      backgroundColor: "#3399ff",
      padding: "auto",
      border: "none",
      margin: "25px 25px",
      height: "33px",
      width: "50px"
    };
    return (
      <div>
        <h1>Payment Details:</h1>
        <select
          defaultValue={values.paymentType}
          onChange={handleChange("paymentType")}
        >
          <option></option>
          <option>eCheck</option>
          <option>Credit / Debit Card</option>
        </select>
        <br />
        <br />
        {this.switchHandler(values.paymentType, values, handleChange)}
        <br />
        <br />
        <button onClick={this.previous} style={prevStyle}>
          Previous
        </button>
        <button style={nextStyle} onClick={this.next}>
          Next
        </button>
      </div>
    );
  }
}

export default Payment;
