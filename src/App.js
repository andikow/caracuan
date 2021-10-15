import logo from './logo.svg';
import './App.css';
import  './public/assets/fontawesome/css/all.css';
import './public/assets/bootstrap/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <i class="fas fa-ad" style={{color:"red"}}></i>
        <i class="far fa-abacus"></i>
        <i class="fal fa-user"></i>
        <i class="fab fa-github-square"></i>
        <button type="button" class="btn btn-primary">Primary</button>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
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
