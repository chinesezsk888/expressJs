/*朋友圈帖子api模拟 */
var express = require('express');
var Mock = require('mockjs'); 
var router = express.Router();
var Random = Mock.Random;

var getList = function(){
    var dataList = Mock.mock({
      "resultCode":"1",
      "resultMsg":"success",
      "systemTime":"1389178672179",
      "noteCommentNum":3,
      "content":{
        "dataType":"0",
        "contId":"3603",
        "commentId":"",
        "content":"红点测试",
        "commentType":"1",
        "objectType":"7",
        "praiseTimes":"0",
        "forwordType":"48",
        "interactionNum":"11",
        "isHot":"",
        "topicWord":{},
        "pubTime":"2019-10-14",
        "location":"上海市·东方早报",
        "quoteCont":{},
        "commentList":[],
        "userInfo": {
            "userId": "97432",
            "pic": "//139.196.248.235:8089/wap/publish/interaction/image/0/41/690.png",
            "sname": "fxf-",
            "perDesc": "认证信息",
            "isAuth": "1",
            "userType": "0",
            "userLable": "澎湃号·湃客",
            "isOrder": "1",
            "url":"user_97432"
        },
        "imageList": [],
        "videoList": [],
        "linkCont": {},
        "url":"momentsDetail_3603",
        "test":"test3",
        "voteObject": {
			"voteId": "1",
			"title": "银行员工穿稽查服，推销ETC，你怎么看??id=2293",
			"type": "2",
            "voteNum":"10",
			"optionList": [{
				"optionId": "1",
				"name": "银行员工也是被逼无奈银行员工也是被逼无奈银行员工也是被逼无奈银行员工也是被逼无奈银行员工也是被逼无奈，理解",
				"voteCount": "1"
			}, {
				"optionId": "2",
				"name": "冒充稽查，违法行为",
				"voteCount": "3"
			}, {
				"optionId": "3",
				"name": "此乃表象，背后问题值得深思",
				"voteCount": "6"
			}]
		},
      },
      "commentList|3": [{
        "commentId":"213786",
        "type":"1",
        "objectType":"7",
        "contId":"3603",
        "contName":"",
        "parentId":"213786",
        "content":"小宝贝下班下班下班",
        "userName":"00777",
        "userId":"97971",
        "praiseTimes":"0",
        "pubTime":"2019-10-14",
        "userInfo":{
            "userLable":"",
            "isMedia":"0",
            "userId":"97971",
            "sname":"00777",
            "perDesc":"签名签名签名",
            "isAuth":"1",
            "url":"user_97971",
            "pic":"//139.196.248.235:8089/wap/publish/interaction/image/0/41/729.jpg"}
        }
      ]
    })
    return dataList;
}


router.get('/', function(req, res, next) {
  var list = getList();
  res.json(list)
});
module.exports = router;