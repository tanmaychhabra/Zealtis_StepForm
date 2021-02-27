import React, { Component } from "react";

class ECheck extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <label>Bank Name: </label>
        <input
          type="text"
          defaultValue={values.bankName}
          onChange={handleChange("bankName")}
        />
        <br />
        <br />
        <label>Routing Number: </label>
        <input
          type="text"
          defaultValue={values.routingNumber}
          onChange={handleChange("routingNumber")}
        />
        <br />
        <br />
        <label>Account Number: </label>
        <input
          type="text"
          defaultValue={values.accountNumber}
          onChange={handleChange("accountNumber")}
        />
      </div>
    );
  }
}

export default ECheck;
