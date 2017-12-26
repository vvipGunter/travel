function roll_pic_flash(roll_pic_ary) {
var w = roll_pic_ary[3][0];  
var h = roll_pic_ary[3][1];  
var text_h = roll_pic_ary[3][2];  
var bgcolor = roll_pic_ary[3][3];  
var roll_swf = roll_pic_ary[3][4];  
var swf_height = h + text_h;  
var pics = roll_pic_ary[0].join("|");  
var links = roll_pic_ary[1].join("|");  
var texts = roll_pic_ary[2].join("|");  

return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ w +'" height="'+ swf_height +'"><param name="default_url" value="http://www.hbw.cn/"><param name="allowScriptAccess" value="sameDomain"><param name="movie" value="' + roll_swf + '"><param name="quality" value="high"><param name="bgcolor" value="'+bgcolor+'"><param name="menu" value="false"><param name="improved_by" value="http://www.hbcms.com/"><param name=wmode value="opaque"><param name="FlashVars" value="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+w+'&borderheight='+h+'&textheight='+text_h+'"><embed src="' + roll_swf + '" wmode="opaque" FlashVars="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+w+'&borderheight='+h+'&textheight='+text_h+'" menu="false" bgcolor="'+bgcolor+'" quality="high" width="'+ w +'" height="'+ h +'" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';  

}  
var roll_pic_width = 800;                              //图片宽度  
var roll_pic_height = 700;                           // 图片高度  
var roll_text_height = 18;                          // 文字高度  
var roll_bgcolor = '#FFFFFF';                    // 幻灯片背景色  
var roll_flash = 'JS/roll_pic_new.swf'; // 幻灯片flash地址，请将此flash下载保存到你的服务器，以免失效  
var roll_pic_ary = new Array(Array(0),Array(0),Array(0),  
Array(roll_pic_width,roll_pic_height,roll_text_height,roll_bgcolor,roll_flash));  
roll_pic_ary[0].push("Album/011.jpg");  
roll_pic_ary[1].push(("http://www.baidu.com"));  
roll_pic_ary[2].push("11"); 
roll_pic_ary[0].push("Album/018.jpg");  
roll_pic_ary[1].push(escape("http://www.google.cn"));  
roll_pic_ary[2].push("18");
roll_pic_ary[0].push("Album/021.jpg");  
roll_pic_ary[1].push(escape("http://www.sina.com"));  
roll_pic_ary[2].push("21");
roll_pic_ary[0].push("Album/028.jpg");  
roll_pic_ary[1].push(escape("http://www.duote.com"));  
roll_pic_ary[2].push("28");  


// 如果还需要增加图片，请copy上面的代码即可  

// 显示幻灯片式的网页图片滚动  
function flashload()
{
document.getElementById("divflash").innerHTML+=roll_pic_flash(roll_pic_ary);
}

window.onload=function(){
flashload();
}
