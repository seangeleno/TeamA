var Game = require('../models/game.js')

//Firstly, we have index to show all games, empty brackets signify all games
function index(req, res) {
  Game.find({/*EMPTY === GOOD*/}, function(err, games){
    if(err)throw err
    res.json(games)
  })
}
//secondly we have CREATE
function create(req, res){
  var game         = new Game()
  game.title       = req.body.title
  game.max_players = req.body.max_players
  game.type        = req.body.type
//gotta save, or else it won't work!
  game.save(function(err){
    if(err){
      if(err.code == 11000){
        return res.json({success: false, message: "game already exists" })
      } else {
        res.send(err)
      }
    }
    res.json({success: true, message: "Game created, heck yeah!"})
    })
  }
//third, we have our good ol' SHOW function
function show(req, res){
  Game.find({title: req.params.title}, function(err){
    if(err)throw err
    res.json(game)
  })
}

//Fourth Place: UPDATE
function update(req, res){
  Game.findOneAndUpdate({title: req.params.title}, {max_players: req.params.max_players}, {type: req.params.type},
  function(err){
    if (err)throw err
    res.json(game)
  })
}

// function update(req, res){
// 	// update a single game -- update
// 	Game.findById(req.params.game_id, function(err, game){
// 		if(err) res.send(err)
//
// 		if(req.body.game.title) game.title = req.body.game.title
// 		if(req.body.game.max_players) game.max_players = req.body.game.max_players
// 		if(req.body.game.type) game.type = req.body.game.type
//
// 		game.save(function(err){
// 			if(err) res.send(err)
// 			res.json({success: true, message: "your game has been updated!"})
// 		})
// 	})
// }


//Last but not least, we have DESTROY!
function destroy(req, res){
	// delete a single game -- destroy
	Game.remove({
		_id: req.params.game.title
	}, function(err, game){
		if(err) res.send(err)
		res.json({success: true, message: "GAME CALLED " + game.title +  " HAS BEEN ANNIHILATED!"})
	})
}

// function destroy(req, res){
// 	// delete a single user -- destroy
// 	Game.findOneAndRemove({_id: req.params.game_id}, function(err, user){
// 		if(err) res.send(err)
// 		res.json({success: true, message: "Game: " + game.title + " deleted!"})
// 	})
// }

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}
