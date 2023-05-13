const router = require('express').Router();
const openAiRoutes = require('./openAiRoutes.js');

router.use('/openai', openAiRoutes);

module.exports = router;