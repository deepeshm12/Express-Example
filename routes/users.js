var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getCats', function(req, res, next) {
  console.log("HELL");
  //res.send('respond with a resource');
  var jsonData = 
  [{
    "name" : "cat-1",
    "id" : "2"  
    },
    {
    "name" : "cat-2",
    "id" : "3"  
    },
    {
    "name" : "cat-3",
    "id" : "4"  
    },
    {
    "name" : "cat-4",
    "id" : "5"  
    }
  ]
  res.jsonp(jsonData);
});

module.exports = router;
