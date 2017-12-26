//此文件功能：1.动态加载Css和JS,只需输入文件名
//2.
function LoadCss(CssFileSrc){
var mytype="text\/css";
var myrel="stylesheet";
var cssPath="Css\/";
var HouZhui=".css";
document.writeln("<link href='"+cssPath+CssFileSrc+HouZhui+"' rel='"+myrel+"' type='"+mytype+"'/>");
}
function LoadJS(JSFileSrc){
 var mytype="text\/javascript";
 var mylanguage="javascript";
 var jsPath="JS\/";
 var HouZhui=".js";
 document.writeln("<script language='"+mylanguage+"' type='"+mytype+"' src='"+jsPath+JSFileSrc+HouZhui+"'><\/script>");
}

