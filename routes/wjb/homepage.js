/**外交部api首页模拟**/
var express = require('express');
var Mock = require('mockjs');
var router = express.Router();
var Random = Mock.Random;

var getList = function(){
  
  var dataList = Mock.mock({
    "resultCode":"1",
    "resultMsg":"success",
    "headLineList|4":[{
      "id|+1":0,
      "title|1":[Random.ctitle(40),Random.ctitle(10)],
      "pic":Random.image('690x552')
    }],
    "topNewsList|10":[{
      "id|+1":0,
      "title|1":[Random.ctitle(40),Random.ctitle(10)],
      "des|1":[Random.ctitle(40),Random.ctitle(10)]
    }],
    "commonNewsList|10":[{
      "id|+1":0,
      "title|1":[Random.ctitle(40),Random.ctitle(10)],
      "date:1":["5天前","2019-01-12"],
      "thumbnail|1":[Random.image('300x200'),'']
    }]
  })
  
  return dataList;
  
}
router.get('/', function(req, res, next) {
  var list = getList(1);
  res.json(list)
});
module.exports = router;