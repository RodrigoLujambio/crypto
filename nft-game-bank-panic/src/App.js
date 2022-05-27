import logo from './logo.svg';
import './App.css';
import Phaser from 'phaser';
import Boot from "./scenes/Boot";
import Preloader from "./scenes/Preloader";
import MainMenu from "./scenes/MainMenu";
import MainGame from "./scenes/Game";
import { useState } from 'react';

let game = null;

function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    setLoaded(true);
    const config = {
      type: Phaser.AUTO,
      gameTitle: "P2E Bank Panic | Phaser x Moralis",
      parent: "game-container",
      autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
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
    };
    console.log(game, "game")
    // init 2d game (Phaser canvas element)
    if (game === null) {
      // init instance of phaser game as per config
      game = new Phaser.Game(config);
      // listen to in-game events
      // before starting we sign in with wallet
      game.events.on("LOGIN_PLAYER", (event) => {
        console.log("⛓⛓⛓ Login via Web3 Wallet ⛓⛓⛓");
        // trigger wallet authentication
        //login();
      });

      game.events.on("GAME_OVER", (event) => {
        console.log("Game Over: State Updated");
        /*
        // WIP: When GAME_OVER event triggered from within Phaser scene:  state checked for end states (win/lose).
        if (initState.gameId && initState.state === "win") {
          // 
          // set-up params
          const params = {
            gameId: initState.gameId,
            player: initState.player.address,
            winnings: initState.score,
          };
          win();
        }
        */
      });

      game.events.on("STARTGAME", (event) => {
        console.log("STARTGAME");
        // TODO: set initial game state
        // * gameId, etc
        // * run cloud function for admin bot to move funcs to  escrow
      });
    }
  }

  return (
    <>
   
    </>
  );
}

export default App;
