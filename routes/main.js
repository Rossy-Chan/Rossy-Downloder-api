__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('https://github.com/Rossy-Chan/Rossy-Downloder-api/README.md')
})
module.exports = router
