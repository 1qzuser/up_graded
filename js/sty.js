/*
 * @Author: coisini 
 * @Date: 2021-05-30 19:32:28 
 * @Last Modified by:   峰峰吃芒果 
 * @Last Modified time: 2021-05-30 19:32:28 
 */

function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
}
var body = document.getElementsByTagName("body")[0];
document.onclick = function(e) {
    var num = random(0, 19);
    // 颜色数组
    var color = ["peru", "goldenrod", "yellow",
        "chartreuse", "palevioletred", "deeppink",
        "pink", "palegreen", "plum",
        "darkorange", "powderblue", "orangered",
        "orange", "orchid", "red",
        "aqua", "salmon", "gold", "lawngreen"
    ]

    var divmain = document.createElement("div");
    var first = document.createElement("div");
    var second = document.createElement("div");
    // 给div加属性
    divmain.setAttribute("id", "love");
    divmain.setAttribute("class", "love");
    first.setAttribute("id", "first");
    second.setAttribute("id", "second");
    // 向最外层内添加内层div
    divmain.appendChild(first);
    divmain.appendChild(second);
    // 根据鼠标位置来确定div的位置
    //divmain.style.top = e.pageY + "px";
    //divmain.style.left = e.pageX + "px";
    divmain.style.cssText = "top:" + e.pageY + "px;left:" + e.pageX + "px";

    // 给心形div加随机颜色
    first.style.backgroundColor = color[num];
    second.style.backgroundColor = color[num];
    body.appendChild(divmain);

    $(".love").animate({
        opacity: "0",
        top: "-=50px"
    }, 1500);

}

// 利用定时器来清除页面的垃圾
setInterval(function() {
    var div = document.getElementsByClassName("love");
    var len = div.length;
    var num;
    for(var i = len - 1; i >= 0; i--) {
        num = parseInt(div[i].style.opacity);
        if(num <= 0) {
            div[i].remove();
        }
    }

}, 3500);