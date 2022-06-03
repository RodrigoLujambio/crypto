import './App.css'
import Phaser from 'phaser'
import gameConfig from './gameConfig'
import { useDispatch } from 'react-redux'
import { increment } from './store/counter-slice'

let game: Phaser.Game | null = null
// P2E integration: 3. set-up  comms to Phaser scripts

function App(): JSX.Element {
  const dispatch = useDispatch()

  if (!game) {
    dispatch(increment())
    game = new Phaser.Game(gameConfig)

    game.events.on('LOGIN_PLAYER', (event: string | symbol, fn: Function, context?: any) => {
      console.log('⛓⛓⛓ Login via Web3 Wallet ⛓⛓⛓')
      // trigger wallet authentication
      //login()
    })

    game.events.on('GAME_OVER', (event: string | symbol, fn: Function, context?: any) => {
      console.log('Game Over: State Updated')
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
    })

    game.events.on('STARTGAME', (event: string | symbol, fn: Function, context?: any) => {
      console.log('STARTGAME')
      // TODO: set initial game state
      // * gameId, etc
      // * run cloud function for admin bot to move funcs to  escrow
    })
  }

  return <></>
}

export default App
