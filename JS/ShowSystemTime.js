//显示系统时间，按照自己指定的样式
function ShowTime() {
    //var myday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"); //以英文显示当前的天数
    var today = new Date();
    var y = today.getFullYear();  //分别定义变量为年，月，日，现在时间，时，分，秒
    //m = today.getUTCMonth() + 1 + "月";
    var m = today.getMonth() + 1;
    if (m < 10) m = "0" + m;
    var d = today.getDate();
    if (d < 10) d = "0" + d;
    var h = today.getHours();
    if (h < 10) h = "0" + h;
    var min = today.getMinutes();
    if (min < 10) min = "0" + min;
    var sec = today.getSeconds();
    if (sec < 10) sec = "0" + sec;
    var nowdate = y + "<label style='color:yellow'>年</label>" + m + "<label style='color:yellow'>月</label>" + d + "<label style='color:yellow'>日</label>" +"  "+ h + "<label style='color:yellow;font-weight:bold;'>:</label>" + min + "<label style='color:yellow;font-weight:bold;'>:</label>" + sec;
   document.getElementById("inputTime").innerHTML = nowdate;
    //    document.getElementById('<%=inputTime.ClientID %>').innerHTML = nowdate;
    timeid= setTimeout("ShowTime()", 1000);
//     //清空消息队列
//    clearTimeout(timeid); 
}

 function Welcome() {
 var aa = $("#bannerwelcome");
//var aa=document.getElementById('<%=loginedtime.ClientID %>');
if(aa.text()=="")
    {
       aa.html("游客，欢迎您！Welcome to my blog！");
       aa.css("font-size","20px");
       aa.css("color","red");
       aa.css("margin-top","250px");
    }
      // aa.show(3000,function(){});
     //aa.hide(1000, function() { });
     
     aa.slideUp(3000,function(){});
     aa.slideDown(3000,function(){});
     //淡入淡出
     //aa.fadeIn(1500, function() { });
     //aa.fadeOut(1500, function() { });
     setTimeout("Welcome()", 1000);
}