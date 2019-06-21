import React, { Component } from "react";
import { connect } from "react-redux";

import { getSmurfs, createSmurf } from "../actions";

class Smurfs extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
  componentDidMount() {
    this.props.getSmurfs();
  }

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
      <div>
        <div className="smurf-list">
          {this.props.smurfs.map(smurf => (
            <div>
              <p>name:{smurf.name}</p>
              <p>age:{smurf.age}</p>
              <p>height:{smurf.height}</p>
            </div>
          ))}
        </div>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  {
    getSmurfs,
    createSmurf
  }
)(Smurfs);
