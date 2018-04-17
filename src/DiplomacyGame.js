import { Game, TurnOrder } from 'boardgame.io/core'

import { setupPlayers, setupStartingPositions } from './rules/players'
import { TURN_SEASONS } from './rules/constants'

const DiplomacyGame = Game({
  setup: (ctx) => {
    const players = setupPlayers(ctx.numPlayers, ctx.random)
    const startingPositions = setupStartingPositions(players)
 
    return {
      players: players,
      supplyCenters: startingPositions,

      // Game rules dictate that the first turn is Spring 1901.
      turnSeason: TURN_SEASONS.SPRING,
      turnYear: 1901
    }
  },

  moves: {
  },

  flow: {
    turnOrder: TurnOrder.ANY,

    /**
     * Actions to perform at the beginning of each turn
     */
    onTurnEnd: (G, ctx) => {
      // Increment the year if the previous turn was during the fall season
      const turnYear = (G.turnSeason === TURN_SEASONS.FALL) ? G.turnYear + 1 : G.turnYear

      // Switch seasons
      const turnSeason = (G.turnSeason === TURN_SEASONS.SPRING) ? TURN_SEASONS.FALL : TURN_SEASONS.SPRING

      // Set phase to 'diplomatic'

      return { ...G, turnSeason, turnYear }
    },

    /**
     * What is the win condition?
     * 
     * From "Object of the Game" (5th edition)
     * 
     * As soon as one Great Power controls 18 supply centers, its considered to have gained
     * control of Europe. The player representing that Great Power is the winner. However,
     * players can end the game by agreement before a winner is determined. In this case, all
     * players who still have pieces on the game board share equally in a draw.
     * 
     * From "How to Play" - "Overview"
     * 
     * After a Fall turn, if one Great Power controls 18 or more supply
     * centers, the game ends and that player is declared the winner.
     * 
     * Is this a contradiction?
     * 
     * The below function assumes this win condition can be met at any time. If this is not
     * true, move it to the last phase of the `flow` object below.
     */
    endGameIf: (G, ctx) => {
      // process G.players to see if 18 or more supply centers are owned by a single player

      // process ??? to check if all players have agreed to end the game early (in a draw)
    },

    phases: [
      {
        name: 'diplomatic',
        onPhaseBegin: (G, ctx) => G,
        // ends if:
        // - 15 minute timer is up (30min for the first turn)
        // - all players agree to end negotiations before the end of timer
        onPhaseEnd: (G, ctx) => G,
      },
      {
        name: 'order writing',
        onPhaseBegin: (G, ctx) => G,
        // ends after all orders are written
        // five minute timer (unwritten orders default to hold)
        onPhaseEnd: (G, ctx) => G,
      },
      {
        name: 'order resolution',
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
      },
      {
        name: 'retreat and disbanding',
        // ends after all orders are written
        // five minute timer (unwritten orders default to no action)
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => {
          // End turn on this phase after the spring season
          if (G.turnSeason === TURN_SEASONS.SPRING) {
            ctx.events.endTurn()
          }

          return G
        }
      },
      {
        // This phase only executes at the end of the fall season each year
        name: 'gaining and losing units',
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => {
          // After completing this phase, always go to the next turn
          ctx.events.endTurn()
          return G
        }
      }
    ]
  }
})


export default DiplomacyGame