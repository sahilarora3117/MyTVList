var express = require("express");
var router = express.Router();
const TVDB = require('node-tvdb');
const tvdb = new TVDB('L4QXKUSQ771I9A1Y');
router.get('/:id', function (req,res){
    tvdb.getSeriesImages(req.params.id, 'fanart')   
    .then(response => {
        console.log(response)
        var url =  "https://artworks.thetvdb.com/banners/" + response[2].fileName;
        res.send(url); 
    
    })
    .catch(error => { console.log(error) });
});


module.exports = router;