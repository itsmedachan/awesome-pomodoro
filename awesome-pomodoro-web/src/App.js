import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="orange-bg">
        <div className="container">
          <h1>Let's work with pomodoro!</h1>
        </div>
      </header>
      <section className="timers">
        <div className="tomato-timers">
          <div className="tomato">
            <img src="./tomato.png" alt="20 minites" />
            <p>20min</p>
          </div>
          <div className="tomato">
            <img src="./tomato.png" alt="25 minites" />
            <p>25min</p>
          </div>
          <div className="tomato">
            <img src="./tomato.png" alt="30 minites" />
            <p>30min</p>
          </div>
        </div>
      </section>
      <section className="timers">
        <div className="coffee-timers">
          <div className="coffee">
            <img src="./coffee.png" alt="5 minites" />
            <p>5min</p>
          </div>
          <div className="coffee">
            <img src="./coffee.png" alt="10 minites" />
            <p>10min</p>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; itsmedachan.com</p>
      </footer>
    </div>
  );
}

export default App;
