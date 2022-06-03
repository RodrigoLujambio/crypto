import Phaser from 'phaser'
import Boot from './scenes/Boot'
import Preloader from './scenes/Preloader'
import MainMenu from './scenes/MainMenu'
import MainGame from './scenes/Game'

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  title: "P2E Bank Panic | Phaser x Moralis",
  parent: "game-container",
  autoFocus: true,
  fps: {
    target: 60,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  backgroundColor: "#282c34",
  scale: {
    mode: Phaser.Scale.ScaleModes.NONE,
  },
  scene: [Boot, Preloader, MainMenu, MainGame],
}

export default gameConfig;
