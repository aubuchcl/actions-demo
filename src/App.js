import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>7-11 day @ 7-11</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React is pretty cool if you use redux toolkit
        </a>
      </header>
    </div>
  );
}

export default App;
