const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./homeRoutes.js')

const gameRoutes = require('./gameRoutes.js')

router.use('/api', apiRoutes);

router.use('/', homeRoutes)

router.use("/game", gameRoutes)

module.exports = router;
