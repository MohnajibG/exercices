import { useState } from "react";

import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <header className="header">
        <i className="logo" class="fa-brands fa-space-awesome"></i>
        <p className="titre">Ready To Go</p>
      </header>
      <div className="main">
        <div>
          <div>
            <button
              style={{
                background: switch1 ? "#5c48d3" : "white",
                color: switch1 ? "white" : "#5c48d3",
              }}
              onClick={() => setSwitch1(true)}
            >
              <p className="button-on">ON</p>
            </button>{" "}
            <button
              style={{
                background: switch1 ? "white" : "#5c48d3",
                color: switch1 ? "#5c48d3" : "white",
              }}
              onClick={() => setSwitch1(false)}
            >
              <p>OFF</p>
            </button>
          </div>

          <div>
            <button
              style={{
                background: switch2 ? "#5c48d3" : "white",
                color: switch2 ? "white" : "#5c48d3",
              }}
              onClick={() => setSwitch2(true)}
            >
              <p className="button-on">ON</p>
            </button>{" "}
            <button
              style={{
                background: switch2 ? "white" : "#5c48d3",
                color: switch2 ? "#5c48d3" : "white",
              }}
              onClick={() => setSwitch2(false)}
            >
              <p>OFF</p>
            </button>
          </div>

          <div>
            <button
              style={{
                background: switch3 ? "#5c48d3" : "white",
                color: switch3 ? "white" : "#5c48d3",
              }}
              onClick={() => setSwitch3(true)}
            >
              <p className="button-on">ON</p>
            </button>{" "}
            <button
              style={{
                background: switch3 ? "white" : "#5c48d3",
                color: switch3 ? "#5c48d3" : "white",
              }}
              onClick={() => setSwitch3(false)}
            >
              <p>OFF</p>
            </button>
          </div>
        </div>

        <p
          className="go"
          style={{
            background:
              switch1 && switch2 && switch3 === true ? "green" : "red",
          }}
        >
          {switch1 && switch2 && switch3 === true ? "GOOOO" : "No way!"}
        </p>
        <button
          onClick={() => {
            setSwitch1(false);
            setSwitch2(false);
            setSwitch3(false);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
