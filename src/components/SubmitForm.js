import React, { useState } from "react";
import Cancel from "./Cancel/Cancel";
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
        const stat = response.status;
        if (stat === 201) {
          alert("Form submitted successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const style = {
    display: "inline",
    marginRight: "20px"
  };

  const prevStyle = {
    color: "white",
    backgroundColor: "red",
    padding: "auto",
    border: "none",
    margin: "25px 25px",
    height: "33px"
  };

  const submitStyle = {
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
    <div>
      <h2> Personal Info</h2>
      <label>Username: </label>
      <h4 style={style}>{values.userName}</h4>
      <br />
      <label>FirstName: </label>
      <h4 style={style}>{values.firstName}</h4>
      <br />
      <label>LastName: </label>
      <h4 style={style}>{values.lastName}</h4>
      <br />
      <label>Email: </label>
      <h4 style={style}>{values.email}</h4>
      <br />
      <label>Street: </label>
      <h4 style={style}>{values.street}</h4>
      <br />
      <label>Zipcode: </label>
      <h4 style={style}>{values.zip}</h4>
      <br />
      <label>City: </label>
      <h4 style={style}>{values.city}</h4>
      <br />
      <label>State: </label>
      <h4 style={style}>{values.state}</h4>
      <br />
      <label>Country: </label>
      <h4 style={style}>{values.country}</h4>
      <br />
      <h2> Business Info</h2>
      <label>Business Name: </label>
      <h4 style={style}>{values.businessName}</h4>
      <br />
      {values.checked ? (
        <div>
          <label>Street: </label>
          <h4 style={style}>{values.Street}</h4>
          <br />
          <label>Zip Code: </label>
          <h4 style={style}>{values.Zip}</h4>
          <br />
          <label>City: </label>
          <h4 style={style}>{values.City}</h4>
          <br />
          <label>State: </label>
          <h4 style={style}>{values.State}</h4>
          <br />
          <label>Country: </label>
          <h4 style={style}>{values.Country}</h4>
          <br />
        </div>
      ) : (
        <div>
          <label>Street: </label>
          <h4 style={style}>{values.newStreet}</h4>
          <br />
          <label>Zip Code: </label>
          <h4 style={style}>{values.newZip}</h4>
          <br />
          <label>City: </label>
          <h4 style={style}>{values.newCity}</h4>
          <br />
          <label>State: </label>
          <h4 style={style}>{values.newState}</h4>
          <br />
          <label>Country: </label>
          <h4 style={style}>{values.newCountry}</h4>
          <br />
        </div>
      )}
      <br />
      <button onClick={prevStep} style={prevStyle}>
        Previous
      </button>
      <button onClick={submitHandler} style={submitStyle}>
        Submit your data
      </button>
      <Cancel values={values} />
    </div>
  );
}

export default SubmitForm;
