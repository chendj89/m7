const https = require('https');
https.get('https://api.bilibili.com/x/relation/followings?vmid=352318038',function(res){
    // 分段返回的 自己拼接
    let html = '';
    // 有数据产生的时候 拼接
    res.on('data',function(chunk){
        html += chunk;
    })
    // 拼接完成
    res.on('end',function(){
        console.log(html);
    })
})