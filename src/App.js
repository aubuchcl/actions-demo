import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>October 12 at noon!!</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
React is fun
        </a>
      </header>
    </div>
  );
}

export default App;
