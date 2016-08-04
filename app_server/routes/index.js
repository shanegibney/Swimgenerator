var express = require('express');
var router = express.Router();
var sessionCtrl = require('../controllers/session')

/* GET home page. */
router.get('/', sessionCtrl.sessionspec);

module.exports = router;
