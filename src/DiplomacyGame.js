import { Game, TurnOrder } from 'boardgame.io/core'

import { setupPlayers, setupStartingPositions } from './rules/players'
import { PROVINCES, GREAT_POWERS, UNIT_TYPES } from './rules/constants'

const DiplomacyGame = Game({
  setup: (ctx) => {
    const players = setupPlayers(ctx.numPlayers, ctx.random)
    const startingPositions = setupStartingPositions(players)
 
    return {
      players: players,
      supplyCenters: startingPositions,
      cells: Array(9).fill(null)
    }
  },

  moves: {
    clickCell(G, ctx, id) {
      let cells = [...G.cells] // don't mutate original state.
      cells[id] = ctx.currentPlayer
      return { ...G, cells } // don't mutate original state.
    },
  },

  flow: {
    turnOrder: TurnOrder.ANY
  }
})


export default DiplomacyGame