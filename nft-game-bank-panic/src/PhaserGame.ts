import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import Boot from './scenes/Boot'
import Preloader from './scenes/Preloader'
import MainMenu from './scenes/MainMenu'
import MainGame from './scenes/Game'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  backgroundColor: '#282c34',
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [Boot, Preloader, MainMenu, MainGame],
}

export default new Phaser.Game(config)
