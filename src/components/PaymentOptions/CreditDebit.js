import React from "react";

function CreditDebit(props) {
  return (
    <div>
      <label>Card Number: </label>
      <input
        type="text"
        defaultValue={props.values.cardNumber}
        onChange={props.handleChange("cardNumber")}
      />
      <br />
      <br />
      <label>Expiry Date: </label>
      <input
        type="text"
        defaultValue={props.values.expiryDate}
        onChange={props.handleChange("expiryDate")}
      />
      <br />
      <br />
      <label>Security Code: </label>
      <input
        type="number"
        defaultValue={props.values.securityCode}
        onChange={props.handleChange("securityCode")}
      />
    </div>
  );
}

export default CreditDebit;
