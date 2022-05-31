import React from 'react'
import logo from './logo.svg'
import './App.css'
import phaserGame from './PhaserGame'
import HelloWorldScene from './scenes/HelloWorldScene'
// import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";

const handleClick = () => {
  const scene = phaserGame.scene.keys.helloworld as HelloWorldScene
  scene.createEmitter()
}

// export const events = createStore(
//   reducer,
//   applyMiddleware(thunkMiddleware, createLogger())
// );

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Just a vanilla create-react-app overlaying a Phaser canvas :)</p>
        <a
          className="App-link"
          href="https://github.com/kevinshen56714/create-react-phaser3-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>
        <button className="App-button" onClick={handleClick}>
          Or click me
        </button>
      </header> */}
    </div>
  )
}

export default App
