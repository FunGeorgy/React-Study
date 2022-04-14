import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dt: new Date(),
      stop: false,
    };
  }

  updateTime = () => {
    if (this.stop) return;
    this.setState({
      dt: new Date().toLocaleTimeString(),
    });
  };

  changeStop = (isStop) => {
    this.setState({
      stop: !isStop
    });
  }

  render() {
    return (
      <div>
        <p style={{ color: this.color }}>
          Edit {this.state.dt} and save to reload.
        </p>
        <input type="button" onClick={(this.changeStop(this.stop))}>
          stop or return
        </input>
      </div>
    );
  }

  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }
}
