import './App.css'
import Phaser from "phaser";
import gameConfig from './PhaserGame'
import { useDispatch } from 'react-redux';
// const handleClick = () => {
//   const scene = phaserGame.scene.keys.helloworld as HelloWorldScene
//   scene.createEmitter()
// }

import { increment, decrement, incrementByAmount } from "./store/counter-slice";

let game: Phaser.Game | null = null;

function App(): JSX.Element {
  const dispatch = useDispatch();

  if (!game) {
    dispatch(increment())
    game = new Phaser.Game(gameConfig);
  }
  return (<></>)
}

export default App
