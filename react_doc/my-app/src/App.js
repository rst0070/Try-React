import logo from './logo.svg';
import './App.css';

/*
 *
 * 왜 jsx사용?
 * 
 */
const text = "this text is from text variable";
const element = 
(<div style={{ color : 'red' }}>
  <h1>{text}&#32;asdsad</h1>
  <p>this is children</p>
  </div>);
function App() {
  return (
    <div className="App">
      {element}
      <header className="App-header">
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
