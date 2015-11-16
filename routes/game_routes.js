var gamesController = require('..controllers/games_controller.js'),
    express         = require('express'),
    gameRoutes      = express.Router()


//set routes for /games
gameRoutes.route('/')
  .get(gamesController.index)
  .post(gamesController.create)

//set routes for /games/:title
gameRoutes.route(/:title)
  .get(gamesController.show)
  .patch(gamesController.update)
  .delete(gamesController.destroy)

module.exports = gameRoutes
