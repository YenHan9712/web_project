var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'Yoga.html'));
  })

router.get('/member', function(req, res) {
    res.send("網頁新建中");
  });

  module.exports = router;