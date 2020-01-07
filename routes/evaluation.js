let express = require('express');
var exec = require('child_process').exec, child;
// https://stackoverflow.com/questions/1880198/how-to-execute-shell-command-in-javascript
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    const out = exec('ls -la');
    res.json({ "eval": out });
});

module.exports = router;