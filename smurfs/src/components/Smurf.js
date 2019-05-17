import React from "react";

export default function Smurf(props) {
  return (
    <div className="smurf">
      <h1>{props.smurf.name}</h1>
      <h2>{props.smurf.age}</h2>
      <h2>{props.smurf.height}</h2>
    </div>
  );
}
