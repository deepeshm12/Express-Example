var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/getAuth', function(req, res, next) {
  console.log("Auth");
  console.log(req.body);
 
   if (req.body.email === 'admin@example.com' && req.body.password === 'admin') {
         jsonData = {
          jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.SCTAwhurhXSTwlhf_iZFYxeAUw7efnO_vdoTF4D0XVo"
          }
    
    }
     else {
      
         jsonData = {
          jwt: "Invalid User or password"
          }
        }
  
  //res.send('respond with a resource');
console.log(jsonData);
  res.jsonp(jsonData);
});

module.exports = router;
