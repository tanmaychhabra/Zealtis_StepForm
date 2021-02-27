import React, { Component } from "react";

class Cancel extends Component {
  constructor(props) {
    super(props);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  cancelHandler() {
    const newObj = this.props.values;
    console.log(newObj.step);
    Object.keys(newObj).forEach((key) => {
      if (typeof newObj[key] == "boolean") {
        newObj[key] = false;
      } else if (typeof newObj[key] == "number") {
        console.log(newObj);
        newObj[key] = 1;
      } else {
        newObj[key] = "";
      }
    });
    console.log(newObj);
  }
  render() {
    return (
      <React.Fragment>
        <button
          style={{
            color: "white",
            backgroundColor: "#bfba15",
            padding: "auto",
            border: "none",
            margin: "25px 25px",
            height: "33px",
            width: "80px"
          }}
          onClick={this.cancelHandler}
        >
          Cancel
        </button>
      </React.Fragment>
    );
  }
}

export default Cancel;
