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

function App(): JSX.Element {
  return (<></>)
}

export default App
