import logo from './logo.svg';
import './App.css';
import  './public/assets/fontawesome/css/all.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <i class="fas fa-ad" style={{color:"red"}}></i>
        <i class="far fa-abacus"></i>
        <i class="fal fa-user"></i>
        <i class="fab fa-github-square"></i>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
