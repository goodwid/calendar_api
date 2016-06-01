const router = require('express').Router();
const m = require('moment');

router.get('/:key', (req, res) => {
  res.send(`${req.params.key} shows ${m().format('HH:mm')}`);
});

module.exports = router;
