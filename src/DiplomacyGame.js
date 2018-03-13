import BoardgameIO from 'boardgame.io'

const DiplomacyGame = BoardgameIO.Game({
  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell(G, ctx, id) {
      let cells = [...G.cells] // don't mutate original state.
      cells[id] = ctx.currentPlayer
      return { ...G, cells } // don't mutate original state.
    },
  },
})

export default DiplomacyGame