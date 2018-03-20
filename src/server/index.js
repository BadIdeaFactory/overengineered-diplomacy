const Server = require('boardgame.io/server').Server
const DiplomacyGame = require('../DiplomacyGame').DiplomacyGame
const server = Server({ games: [DiplomacyGame] })

server.run(8000)
