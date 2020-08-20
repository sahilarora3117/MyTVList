var express = require("express");
var router = express.Router();
var Axios = require('axios');

router.get('/:query', function (req,res){
    Axios.get('https://api.trakt.tv/search/show?query=' + req.params.query, {
        headers: {
            "trakt-api-key":
            "61f407a46f6292f437b152e9a3e1009707fcd2634b9c3ff808d168988098a94d",
          "Content-type": "application/json",
          "Authorization": "Bearer [acbbafe27fcc0d95d33a6afa13c21276ea1d8f8db1ff98a6d0ac6dab0917af0f]",
          "trakt-api-version": '2',
        }
      })
      .then(function (response) {
        res.send(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });  
});


module.exports = router;