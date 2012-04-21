//parse page and gen users array
//each user is combined with name, id, url, and follow_num

function extractFollowers(){
    var followUsers = [];

    // 获取第一组 关注者名单的div
    var followsDiv = document.getElementById("xoiw");

    // 获取具体的follows elts
    var followElts = elt.getElementsByClassName("xerw xe");
    
    for (var i = 0; i < followElts.length; i++){
        var followElt = followElts[i];
        var name = followElt.getElementsByClassName("xio")[0];
        var content = followElt.getElementsByClassName("xbw zm-profile-follower-count")[0].html;
        //在字符串中匹配follow数
        var followNum = content.match(/\d*/);
        var userObj = {
            'name' : 'test',
            'follows' : followNum
        };
        followUsers.push(userObj);
    }

    return followUsers;
}
