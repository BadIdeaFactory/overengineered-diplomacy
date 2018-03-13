import { Random } from 'boardgame.io/core'
import { shuffle } from 'lodash'

export function setupPlayers (numPlayers) {
  const greatPowers = [
    'England',
    'Germany',
    'Russia',
    'Turkey',
    'Italy',
    'France',
    'Austria'
  ]
  // TODO: why is this not shuffling between sessions?
  const randomizedPowers = Random.Shuffle(greatPowers)

  // Use Lodash array shuffle for now.
  const randomized = shuffle(greatPowers)

  const players = {}
  for (let i = 0; i < numPlayers; i++) {
    players[i] = {
      id: i,
      name: null,
      power: randomized[i]
    }
  }

  return players
}