import React, { useState } from "react";
import axios from "axios";

function SubmitForm(props) {
  const { status, setStatus } = useState(false);
  const { values, prevStep } = props;

  const submitHandler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        userName: values.userName,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        street: values.street,
        city: values.firstName,
        zipcode: values.zip,
        State: values.state,
        country: values.country
      })
      .then((response) => {
        //console.log(response)
        const stat = response.status;
        if (stat === 201) {
          alert("Form submitted successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const prevStyle = {
    color: "white",
    backgroundColor: "red",
    padding: "auto",
    border: "none",
    margin: "25px 25px",
    marginLeft: "160px",
    height: "33px"
  };

  const nextStyle = {
    display: "inline",
    color: "white",
    backgroundColor: "green",
    padding: "auto",
    border: "none",
    margin: "25px 25px",
    height: "33px",
    width: "140px"
  };

  return (
    <div style={{ alignContent: "center" }}>
      <button onClick={prevStep} style={prevStyle}>
        Previous
      </button>
      <button onClick={submitHandler} style={nextStyle}>
        Submit your data
      </button>
    </div>
  );
}

export default SubmitForm;
