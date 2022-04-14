import React from "react";
import Timer from "../components/Timer.js";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name
  }
  render() {
    return (
      <div>
        <h1>{this.name}</h1>
        <div><Timer /></div>
      </div>
    );
  }
}
