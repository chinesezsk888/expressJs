/*朋友圈个人详情页api模拟 */
var express = require('express');
var Mock = require('mockjs'); 
var router = express.Router();
var Random = Mock.Random;
var getList = function(){
    var dataList = Mock.mock({
        "resultCode": "1",
        "resultMsg": "success",
        "systemTime": "1572501815674",
        "recordTotal": "1469",
        "nextUrl": "",
      "contList|3": [{
            "dataType": "0",
            "contId": "3990",
            "commentId": "",
            "content": "感觉放假放假多久\n减肥减肥放假放假 ",
            "commentType": "4",
            "objectType": "7",
            "praiseTimes": "1",
            "forwordType": "48",
            "interactionNum": "0",
            "isHot": "",
            "topicWord": {
                "wordId": "140",
                "word": "#澎湃质量报告",
                "type": "1"
            },
            "pubTime": "2天前发表澎友圈",
            "location": "上海市·东方早报",
            "quoteCont": {},
            "contObject": {},
            "commentList": [],
            "userInfo": {
                "userId": "97432",
                "pic": "//139.196.248.235:8089/www/publish/interaction/image/0/41/690.png",
                "sname": "fxf-",
                "perDesc": "认证信息",
                "isAuth": "1",
                "userType": "0",
                "userLable": "澎湃号·湃客",
                "isOrder": "0"
            },
            "cardMode": "",
            "imageList": [],
            "videoList": [
                {
                    "url": "http://video2.thepaper.cn/complaint/e62c79d174de473d9c15a68f80f97434/ld/6df2412390514f8496a2bd75b00a9e781572250906312.mp4",
                    "watermark": "1",
                    "videoSize": "0.5M流量",
                    "width": "360",
                    "height": "480",
                    "duration": "00:09",
                    "coverPic": "http://thepapertestout.oss-cn-hangzhou.aliyuncs.com/complaint/cover/e62c79d174de473d9c15a68f80f97434/1000.jpg"
                }
            ],
            "linkCont": {},
            "voteObject": {
                "voteId": "1",
                "title": "银行员工穿稽查服，推销ETC，你怎么看??id=2293",
                "type": "2",
                "totalNum":"10",
                "optionList": [{
                    "optionId": "1",
                    "name": "银行员工也是被逼无奈银行员工也是被逼无奈银行员工也是被逼无奈银行员工也是被逼无奈银行员工也是被逼无奈银行员工也是被逼无奈，理解",
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
            }
        }]
    })
    return dataList;
}


router.get('/', function(req, res, next) {
  var list = getList();
  res.json(list)
});
module.exports = router;