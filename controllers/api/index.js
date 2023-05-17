const router = require('express').Router();
const openAiRoutes = require('./openAiRoutes.js');
const userRoutes = require("./userRoutes")

router.use('/openai', openAiRoutes);
router.use('/users', userRoutes);

module.exports = router;