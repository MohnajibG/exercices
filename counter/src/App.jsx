import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <header className="header">
        <i className="logo" class="fa-solid fa-calculator"></i>
        <p className="titre">React Counter</p>
      </header>
      <main className="main">
        <div className="count">
          {counter > 0 && (
            <button
              className="moins"
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              -
            </button>
          )}
          <p className="afficheur">{counter}</p>
          {counter < 10 && (
            <button
              className="plus"
              onClick={() => {
                setCounter(counter + 1),
              }}
            >
              +
            </button>
          )}
        </div>
        <button
          className="reset"
          onClick={() => {
            setCounter(0);
          }}
        >
          <p>Reset</p>
        </button>
      </main>
    </>
  );
};

export default App;
