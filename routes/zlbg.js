/* 质量报告数据api模拟 */
var express = require('express');
var Mock = require('mockjs');
var router = express.Router();
var Random = Mock.Random;

var getList = function(page) {
  var pageNum = parseInt(page);
  var nextUrl = "http://localhost:3000/zlbg/params?page="+(pageNum+1);
  if(pageNum>3){
    nextUrl = "";
  }
  var dataList = Mock.mock({
    "resultCode":"1",
    "resultMsg":"success",
    "systemTime":"1389178672179",
    "categoryList|10": [{
      "categoryName":Random.ctitle(4),
      "categoryId|+1":1,
    }],
    "contList|15": [{
        "userInfo":{
          "name|1":[Random.ctitle(3),Random.ctitle(20)],//用户名
          "url":Random.image('50x50')//用户头像
        },
        "pubTime|1":[Random.date(),"3天前"],//投诉日期
        "title|1":[Random.ctitle(40),Random.ctitle(30),Random.ctitle(40)],//投诉标题
        "complaintObject|1":[Random.ctitle(30),Random.ctitle(30),Random.ctitle(10)],//投诉对象
        "description|1":[Random.cparagraph(),Random.cparagraph(),Random.cparagraph()],//投诉详情
        "id|+1": 1+(pageNum-1)*15,
        "lable|1":["置顶",""],
        "status|1":[1,2,3],//投诉状态 审核通过/已回应/已解决
        "response|1":[Random.cparagraph(),Random.cparagraph(),Random.cparagraph()],//回应内容 --已回应 已解决
        "responseObject|1":[Random.cname()],//回应对象
        "quoteCont":{//挂在新闻
            "contId|+1":"1",
            "url":"http://www.baidu.com",
            "pic":"Random.image('160x90')",
            "name":Random.cparagraph(),
            "forwardType":"2",
            "opt":"1"
        }

    }],
    nextUrl:nextUrl
  })
   return dataList
}

router.get('/', function(req, res, next) {
  var list = getList(1);
  res.json(list)
});
router.get('/params', function(req, res, next) {
  var page = req.query.page;
  var list = getList(page);
  res.json(list)
});
module.exports = router;