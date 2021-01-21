import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <p>
          Visit our web
          <a
            // style={{
            //   marginLeft:"10px"
            // }}
            className="App-TeaBreak" // css in App.css and import this css file
            href="https://tea-break.cn"
            target="_blank" // whether open new window
            rel="noopener noreferrer"
            // onClick={()=>{
            //   window.location.href="https://tea-break.cn" //as the node is button to define a funciton
            // }}
          >
            Our Website
          </a>
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
      <body>
        
        </body>>
    </div>
  );
}

export default App;
