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
        <section className="timer-container">
          <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
          <span className="timer" >{this.props.timerMinute}</span>
          <span className="timer">:</span>
          {/* if timerSecond is 0 display 00 if timerSecond is inferior 10 display 0 + timerSeconde if superior to 10 display timerSecond*/}
          <span className="timer">{this.state.timerSecond === 0 ? "00" : this.state.timerSecond < 10 ? "0" + this.state.timerSecond : this.state.timerSecond}</span>
        </section>
        <section className="timer-actions">
            <button>Play</button>
            <button>Stop</button>
            <button>Refresh</button>
        </section>
      </section>
    );
  }
}

export default Timer;
