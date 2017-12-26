function img1(x) {    // 获取数组记录数
    this.length = x;
}
////申明数组并给数组元素赋值，也就是把图片的相对路径保存起来
////若是图片较多，可增加数组元素的个数，
////在这个例子中用了五张图片，所以数组元素个数为“8"。 
iname = new img1(4);
iname[0] = "Album/011.jpg";
iname[1] = "Album/018.jpg";
iname[2] = "Album/021.jpg";
iname[3] = "Album/028.jpg";

var i = 0;
function AutoPlay() {				// 演示变换效果
    if (i == 3)
    { i = 0; } 		//当进行到iname[7]时，返回iname[0]
    else { i++; }
    var srollimg = document.getElementById("srollimg");
//       var srollimg = document.getElementById("<%=srollimg.ClientID%>");
    //srollimg.filters[0].apply(); 	//myimage为图像的name，在<img>标记中定义
    srollimg.src = iname[i];
    //srollimg.filters[0].play();
    mytimeout = setTimeout("AutoPlay()", 2000);
}

window.onload=function(){
             AutoPlay();
};
//i = 0;
//function shownextpic() {
//    if (i == 5) {
//        return false;
//        btnnext.disabled = false;
//    }
//    else
//        myimage.src = iname[++i];
//}
////显示上一张图片
//i = 0;
//function prepic() {
//    if (i == 0) {
//        btnpre.value = "已是第一张图片";
//        btnpre.disabled = true;
//    }
//    else {
//        btnpre.disabled = false;
//        btnpre.value = "上一张";
//        myimage.src = iname[--i];
//    }
//}

//缓存图片
//function imagePreload() {
//  var imgPreload = new img1(8);
//  var i=0;
//  for (i=0; i<arguments.length;i++){
//    imgPreload.src = arguments[i];
//   }
//}
//imagePreload('Images/01.jpg','Images/02.jpg', 'Images/03.jpg', 'Images/04.jpg', 'Images/05.jpg','Images/06.jpg','Images/07.jpg','Images/08.jpg');