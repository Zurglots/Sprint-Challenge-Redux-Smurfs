import React, { Component } from "react";
import { connect } from "react-redux";

import { createSmurf } from "../actions";

class SmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createSmurf = e => {
    e.preventDefault();

    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    this.props.createSmurf(newSmurf);

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.createSmurf} className="smurf-form">
        <div className="input-fields">
          <input
            placeholder="Name your smurf!"
            name="name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <input
            placeholder="How old are they?"
            name="age"
            value={this.state.age}
            onChange={this.handleChanges}
          />
          <input
            placeholder="How tall are they?"
            name="height"
            value={this.state.height}
            onChange={this.handleChanges}
          />
          <button />
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  {
    createSmurf
  }
)(SmurfForm);
