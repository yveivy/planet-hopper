const router = require('express').Router();
const path = require("path")
// Import the custom middleware
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

module.exports = router;
