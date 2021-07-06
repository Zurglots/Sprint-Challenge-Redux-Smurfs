import React from "react";
import Smurf from "./Smurf";

const Smurfs = props => {
  console.log(props);
  return (
    <div>
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} />
      ))}
    </div>
  );
};

export default Smurfs;
