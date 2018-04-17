import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import BoardgameIO from 'boardgame.io'
import GameBoard from './GameBoard'
import DiplomacyGame from './DiplomacyGame'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import './index.css'

const MAX_PLAYERS = 7

const App = BoardgameIO.ReactClient({
  board: GameBoard,
  game: DiplomacyGame,
  numPlayers: MAX_PLAYERS,
  multiplayer: true
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
registerServiceWorker()
