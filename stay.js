var express = require('express');
var path = require('path');
var router = express.Router();
router.use(express.static('./public'));

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'Stay.html'));
  })

router.get('/room', function(req, res) {
    res.send("房間資訊更新中");
  })
  
  module.exports = router;