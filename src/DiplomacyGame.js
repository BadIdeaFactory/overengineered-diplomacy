import { Game, TurnOrder } from 'boardgame.io/core'

const DiplomacyGame = Game({
  setup: (numPlayers) => ({
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