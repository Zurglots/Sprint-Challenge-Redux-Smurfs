import React, { Component } from "react";
import { connect } from "react-redux";
import Smurfs from "../components/Smurfs";

import { getSmurfs } from "../actions";
import SmurfForm from "../components/SmurfForm";

class SmurfContainer extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="smurf-list">
          <Smurfs smurfs={this.props.smurfs} />
        </div>
        <SmurfForm />
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
    getSmurfs
  }
)(SmurfContainer);
