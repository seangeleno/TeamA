var mongoose = require('mongoose')

//create our schema
var gameSchema = new mongoose.Schema({
  title: {type: String, require:true, unique:true},
  max_players: Integer,
  type: String
})

var Game = mongoose.model('Game', gameSchema)

module.exports = Game
