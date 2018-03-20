import React from 'react'
import ReactDOM from 'react-dom'
import BoardgameIO from 'boardgame.io'
import GameBoard from './GameBoard'
import DiplomacyGame from './DiplomacyGame'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const MAX_PLAYERS = 7

const App = BoardgameIO.ReactClient({
  board: GameBoard,
  game: DiplomacyGame,
  numPlayers: MAX_PLAYERS,
  multiplayer: true
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
