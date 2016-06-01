const router = require('express').Router();
const m = require('moment');

router.get('/', (req, res) => {
  res.send(`${req.params.key} shows ${m()}`);
});

module.exports = router;
