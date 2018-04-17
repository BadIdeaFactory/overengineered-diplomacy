/**
 * Assign powers to players randomly.
 *
 * @param {Number} numPlayers
 * @param {Object} randomizer - the `_ctx.random` object from Boardgame.io
 */
export function setupPlayers (numPlayers, randomizer) {
  const greatPowers = [
    'England',
    'Germany',
    'Russia',
    'Turkey',
    'Italy',
    'France',
    'Austria'
  ]

  const randomizedPowers = randomizer.Shuffle(greatPowers)

  const players = {}
  for (let i = 0; i < numPlayers; i++) {
    players[i] = {
      id: i,
      name: null,
      power: randomizedPowers[i]
    }
  }

  return players
}
