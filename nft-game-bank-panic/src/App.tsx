import './App.css'
import Phaser from "phaser";
import gameConfig from './PhaserGame'

// const handleClick = () => {
//   const scene = phaserGame.scene.keys.helloworld as HelloWorldScene
//   scene.createEmitter()
// }

let game: Phaser.Game | null = null;

function App(): JSX.Element {
  if (!game) {
    game = new Phaser.Game(gameConfig);
  }
  return (<></>)
}

export default App
