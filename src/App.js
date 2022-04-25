import React from "react";
import logo from "./logo.svg";
import Form from './components/Form'
// import Player from "./components/Player";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.color = props.color ? props.color : "red";
  }

  render() {
    // const data = [{ key: "1", name: "Petya" },
    //             { key: "2", name: "vanya" }]
    // var players = [];
    // for (var key in data) {
    //   players.push(<Player key={key} name={data[key].name} />);
    // }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ color: this.color }}></p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Form></Form>
            {/* {players} */}
          
        </header>
      </div>
    );
  }
  componentDidMount() {
    // setInterval(this.updateTime, 1000);
  }
}
