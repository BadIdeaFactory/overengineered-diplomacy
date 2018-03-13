import React from 'react'
import ReactDOM from 'react-dom'
import BoardgameIO from 'boardgame.io'
import GameBoard from './GameBoard'
import DiplomacyGame from './DiplomacyGame'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

var App = BoardgameIO.ReactClient({
  board: GameBoard,
  game: DiplomacyGame,
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
