import React from "react";

// Create a Component with props named breakInterval too use it in the App class
function BreakInterval(props) {
  return (
    <section>
      <h4>Break Length</h4>
      <section className="interval-container">
        <button>Down</button>
        <p className="interval-length">{props.breakInterval}</p>
        <button>Up</button>
      </section>
    </section>
  );
}

export default BreakInterval;
