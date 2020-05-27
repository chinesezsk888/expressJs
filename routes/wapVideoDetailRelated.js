var express = require('express');
var Mock = require('mockjs');
var router = express.Router();
var Random = Mock.Random;
var relatedCard = function() {
  var cardMock = Mock.mock({
    "resultCode":"1",
    "resultMsg":"success",
    "systemTime":"1389178672179",
    "relatedCardList|4":[
      {
        "contId|+1":1347154,
        "contType|+1":8,
        "pic": "//139.196.248.235:8089/wap/v3/img/sparker_big.jpg",
        "duration": "01:09",
        "content":Random.cparagraph(),
        "pubTime":"3天前",
        "watermark": "1",
        "liveType": "1",
        "videoNum":"",
      }
    ]
  })
  return cardMock;
}
router.get('/', function(req, res, next) {
  var cardJson = relatedCard();
  res.json(cardJson)
});
module.exports = router;