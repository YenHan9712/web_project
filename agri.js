var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send("Agri Page 網頁建立中");
  })

router.get('/product', function(req, res) {
    res.send("產品資訊尚未上架");
  })
  
  module.exports = router;