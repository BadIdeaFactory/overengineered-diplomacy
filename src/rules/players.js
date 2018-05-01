import { GREAT_POWERS, STARTING_POSITIONS } from './constants'

/**
 * Assign powers to players randomly.
 *
 * @param {Number} numPlayers
 * @param {Object} randomizer - the `_ctx.random` object from Boardgame.io
 * @return {Array} players
 */
export function setupPlayers (numPlayers, randomizer) {
  const randomizedPowers = randomizer.Shuffle(Object.keys(GREAT_POWERS))

  const players = []
  for (let i = 0; i < numPlayers; i++) {
    players.push({
      id: i,
      playerName: null,
      greatPower: randomizedPowers[i]
    })
  }

  return players
}

/**
 * Assign player numbers to the correct supply centers to start from
 *
 * @param {Number} players
 * @return {Object}
 */
export function setupStartingPositions (players) {
  return Object.entries(STARTING_POSITIONS).reduce((accumulator, [key, value]) => {
    accumulator[key] = {
      ...value 
    }

    for (let i = 0; i < players.length; i++) {
      const greatPower = players[i].greatPower
      if (greatPower === accumulator[key].player) {
        accumulator[key].player = players[i].id
      }
    }

    return accumulator
  }, {})
}

