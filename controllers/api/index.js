const router = require('express').Router();
const openAiRoutes = require('./openAiRoutes.js');
const userRoutes = require("./userRoutes")
const gameData = require("./gameData.js");

router.use('/openai', openAiRoutes);
router.use('/users', userRoutes);
router.use("/gamedata", gameData)

module.exports = router;