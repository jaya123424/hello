
const express = require('express')
const { getPlayers, addPlayers, updatePlayers, deletePlayers } = require('../controllers/playerController')


const playerRouter = express.Router()

playerRouter.get('/get-players', getPlayers)

playerRouter.post('/add-players',addPlayers)

playerRouter.put('/update-players/:id',updatePlayers)

playerRouter.delete('/delete-players/:id', deletePlayers)

module.exports = playerRouter