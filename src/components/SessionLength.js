import React from "react";

// Create a Component with props named sessionLength too use it in the App class
function SessionLength(props) {


 function increaseSession() {
    if (props.sessionLength === 60) {
      return;
    }
    //if props.breakInterval under 60 use props.increaseSession() in App.js
    props.increaseSession();
  }

   function decreaseSession() {
    if (props.sessionLength === 1) {
      return;
    }
    //if props.breakInterval under 60 use props.decreaseSession() in App.js
    props.decreaseSession();
  }


  return (
    <section >
      <h4>Session Length</h4>
      <section className="interval-container">
        <button onClick={decreaseSession}>Down</button>
        <p className="interval-length">{props.sessionLength}</p>
        <button onClick={increaseSession}>Up</button>
      </section>
    </section>
  );
}

export default SessionLength;
