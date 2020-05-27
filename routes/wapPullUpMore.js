var express = require('express');
var Mock = require('mockjs');
var router = express.Router();

var moreHtml = function (page,time) {
    var pageNum =  parseInt(page);
    var curruntTime = time;
    if(page>3){
       return
    }
    var jsonHtml = Mock.mock({
        "resultCode":"1",
        "resultMsg":"success",
        "systemTime":"1389178672179",
        "html":'<li><h2>第'+pageNum+'页</h2><div class="img-box"><div class="img"> <img src="http://image.thepaper.cn/www/image/4/60/959.jpg" alt=""></div><div class="img"> <img src="https://testimagecloud.thepaper.cn/testthepaper/image/4/128/951.jpg" alt=""></div><div class="img"> <img src="http://139.196.248.235:8089/wap/image/4/108/55.jpg" alt=""></div></div><div class="tips"><span>阅读</span><span>666</span></div></li><div class="newspath" id="last'+pageNum+'" lastTime="'+curruntTime+'" pageIndex="'+pageNum+'" style="display:none;"></div>'
    })
    return jsonHtml;
}
router.get('/', function(req, res, next) {
    var html = moreHtml(req.query.pageidx,req.query.lastTime);
    res.json(html)
});
module.exports = router;