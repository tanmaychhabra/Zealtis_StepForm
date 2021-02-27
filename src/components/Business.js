import React, { useState } from "react";
import Select from "react-select";

function Business(props) {
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

  // continueNext = (e) => {
  //   e.preventDefault();
  //   props.nextStep();
  // };

  // const options = [
  //   { label: "First Industry", value: "First Industry" },
  //   { label: "Second Industry", value: "Second Industry" },
  //   { label: "Third Industry", value: "Third Industry" }
  // ];

  return (
    <div>
      {props.values.checked ? (
        <div>
          <h1>Business Information</h1>
          <br />
          <label>Name: </label>
          <input
            type="text"
            defaultValue={props.values.businessName}
            onChange={props.handleChange("businessName")}
          />
          <br />
          <br />
          <h2>Address:</h2>
          <label>Copy from Personal Address: </label>
          <input
            type="checkbox"
            checked={props.values.checked}
            onChange={props.checkedHandler}
          />
          <br />
          <br />
          <label>Street Name: </label>
          <input
            type="text"
            onChange={props.handleChange("street")}
            defaultValue={props.values.street}
          />
          <br />
          <br />
          <label>Zip Code: </label>
          <input
            type="text"
            onChange={props.handleChange("zip")}
            defaultValue={props.values.zip}
          />
          <br />
          <br />
          <label>City: </label>
          <input
            type="text"
            onChange={props.handleChange("city")}
            defaultValue={props.values.city}
          />
          <br />
          <br />
          <label>State: </label>
          <input
            type="text"
            onChange={props.handleChange("state")}
            defaultValue={props.values.state}
          />
          <br />
          <br />
          <label>Country: </label>
          <input
            type="text"
            onChange={props.handleChange("country")}
            defaultValue={props.values.country}
          />
          <br />
          <br />
          <Select
            defaultValue={props.values.industryType}
            onChange={props.handleChange("industryType")}
            options={["First Industry", "Second Industry"]}
          >
            <option>First Industry</option>
            <option>Second Industry</option>
          </Select>
          <button onClick={props.prevStep} style={prevStyle}>
            Previous
          </button>
          <button onClick={props.nextStep} style={nextStyle}>
            Next
          </button>
        </div>
      ) : (
        <div>
          <h1>Business Information</h1>
          <br />
          <label>Name: </label>
          <input
            type="text"
            defaultValue={props.values.businessName}
            onChange={props.handleChange("businessName")}
          />
          <br />
          <br />
          <h2>Address:</h2>
          <label>Copy from Personal Address: </label>
          <input
            type="checkbox"
            onChange={props.checkedHandler}
            checked={props.values.checked}
          />
          <br />
          <br />
          <label>Street Name: </label>
          <input
            type="text"
            onChange={props.handleChange("newStreet")}
            defaultValue={props.newStreet}
          />
          <br />
          <br />
          <label>Zip Code: </label>
          <input
            type="text"
            onChange={props.handleChange("newZip")}
            defaultValue={props.newZip}
          />
          <br />
          <br />
          <label>City: </label>
          <input
            type="text"
            onChange={props.handleChange("newCity")}
            defaultValue={props.newCity}
          />
          <br />
          <br />
          <label>State: </label>
          <input
            type="text"
            onChange={props.handleChange("newState")}
            defaultValue={props.newState}
          />
          <br />
          <br />
          <label>Country: </label>
          <input
            type="text"
            onChange={props.handleChange("newCountry")}
            defaultValue={props.newCountry}
          />
          <br />
          <br />
          <button onClick={props.prevStep} style={prevStyle}>
            Previous
          </button>
          <button onClick={props.nextStep} style={nextStyle}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Business;
