import logo from './logo.svg';
import './App.css';
import Flipbook from './Flipbook';

function App() {

  const consoleLog = () => {
    console.log("emitting")
  }

  const pages = [
    null,
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
  ]

  const pagesHiRes = [
    null,
    'images-large/1.jpg',
    'images-large/2.jpg',
    'images-large/3.jpg',
    'images-large/4.jpg',
    'images-large/5.jpg',
    'images-large/6.jpg',
  ]

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.hiih
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Flipbook</h1>
      <Flipbook
        className={"flipbook"}
        pages={pages}
        pagesHiRes={pagesHiRes}
        startPage={0}
        zooms={[1,1.5,2]}
        onFlipLeftStart={() => {
          console.log("emitting flip left start")
        }}
        onFlipLeftEnd={() => {
          console.log("emitting flip left end")
        }}
        onFlipRightStart={() => {
          console.log("emitting flip right start")
        }}
        onFlipRightEnd={() => {
          console.log("emitting flip right end")
        }}
        onZoomStart={() => {
          console.log("emitting on zoom start")
        }}
        onZoomEnd={() => {
          console.log("emitting on zoom end")
        }}
      >
      </Flipbook>
    </div>
  );
}

export default App;
