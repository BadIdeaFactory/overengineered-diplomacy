import { Game, TurnOrder } from 'boardgame.io/core'

import { setupPlayers } from './rules/players'

const DiplomacyGame = Game({
  setup: (ctx) => ({
    players: setupPlayers(ctx.numPlayers, ctx.random),
    cells: Array(9).fill(null)
  }),

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