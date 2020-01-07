let express = require('express');
var exec = require('child_process').exec, child;
// https://stackoverflow.com/questions/1880198/how-to-execute-shell-command-in-javascript
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    console.log(11);
    exec("bash shell/run.sh", (error, stdout, stderr) => {
        if (!error) {
            res.json({ "eval": stdout });
        } else {
            res.json({ "eval": stderr });
        }
    });
});

module.exports = router;