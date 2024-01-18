import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Rendering Deployment Version 1.2.3-latest</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Look at this great page!
        </a>
      </header>
    </div>
  );
}

export default App;
