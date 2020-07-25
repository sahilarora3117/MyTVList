var express = require("express");
var router = express.Router();
const TVDB = require('node-tvdb');
const tvdb = new TVDB('L4QXKUSQ771I9A1Y');
router.get('/:id', function (req,res){
    tvdb.getSeriesBanner(req.params.id)
    .then(response => {
        var url =  "https://artworks.thetvdb.com/banners/" + response;
        res.send(url); 
    
    })
    .catch(error => { console.log(error) });
});


module.exports = router;