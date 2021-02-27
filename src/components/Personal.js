import React, { Component } from "react";
import { Button } from "antd";

class Personal extends Component {
  continue = (e) => {
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const nextStyle = {
      color: "white",
      backgroundColor: "#3399ff",
      padding: "auto",
      border: "none",
      margin: "25px 25px"
    };

    return (
      <div>
        <form onSubmit={this.continue}>
          <h1>Personal Details</h1>
          <label>Username: </label>
          <input
            type="text"
            onChange={handleChange("userName")}
            defaultValue={values.userName}
          />
          <br />
          <br />
          <label>Firstname: </label>
          <input
            type="text"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <br />
          <label>Lastname: </label>
          <input
            type="text"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <br />
          <label>Email: </label>
          <input
            type="text"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <br />
          <h2>Address:</h2>
          <label>Street: </label>
          <input
            type="text"
            onChange={handleChange("street")}
            defaultValue={values.street}
          />
          <br />
          <br />
          <label>Zip Code: </label>
          <input
            type="text"
            onChange={handleChange("zip")}
            defaultValue={values.zip}
          />
          <br />
          <br />
          <label>City: </label>
          <input
            type="text"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <br />
          <label>State: </label>
          <input
            type="text"
            onChange={handleChange("state")}
            defaultValue={values.state}
          />
          <br />
          <br />
          <label>Country: </label>
          <input
            type="text"
            onChange={handleChange("country")}
            defaultValue={values.country}
          />
          <br />
          <br />
          <h3>Telephone Number</h3>
          <br />
          <label>Type: </label>
          <select
            defaultValue={values.telephone}
            onChange={handleChange("telephone")}
          >
            <option>Mobile</option>
            <option>Home</option>
            <option>Office</option>
          </select>
          <input
            type="text"
            defaultValue={values.teleNumber}
            onChange={handleChange("teleNumber")}
          />
          <br />
          <br />
          <Button type="submit" onClick={this.continue} style={nextStyle}>
            Next
          </Button>
        </form>
      </div>
    );
  }
}

export default Personal;
