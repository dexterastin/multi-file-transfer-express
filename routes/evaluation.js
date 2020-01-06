let express = require('express');
let exec = require('sync-exec');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const out = exec('ls -la');
    res.json({ "eval": out });
});

module.exports = router;