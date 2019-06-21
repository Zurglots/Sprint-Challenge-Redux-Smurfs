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
        <form className="smurf-form">
          <div className="input-fields">
            <input
              placeholder="Name your smurf!"
              name="name"
              value={this.state.name}
              onChange={this.handleChanges}
            />
            <input
              placeholder="Name your smurf!"
              name="age"
              value={this.state.age}
              onChange={this.handleChanges}
            />
            <input
              placeholder="Name your smurf!"
              name="height"
              value={this.state.height}
              onChange={this.handleChanges}
            />
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
