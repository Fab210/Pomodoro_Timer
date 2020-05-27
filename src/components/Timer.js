import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
        isSession:true,
        timerSecond :0,
    };
  }
  render() {
    return (
      <section>
        <section>
          <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
          <span>{this.props.timerMinute}</span>
          <span>:</span>
          {/* if timerSecond is 0 display 00 if timerSecond is inferior 10 display 0 + timerSeconde if superior to 10 display timerSecond*/}
          <span>{this.state.timerSecond === 0 ? "00" : this.state.timerSecond < 10 ? "0" + this.state.timerSecond : this.state.timerSecond}</span>
        </section>
      </section>
    );
  }
}

export default Timer;
