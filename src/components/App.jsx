import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);
  const [isNotMousedOver, setNotMouseOver] = useState(false);

  function userClick() {
    setHeadingText("Submitted");
  }

  function changeColor() {
    setMouseOver(true);
  }

  function makeWhite() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={userClick}
        onMouseOver={changeColor}
        onMouseOut={makeWhite}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
