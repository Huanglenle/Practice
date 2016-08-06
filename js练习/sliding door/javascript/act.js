window.onload = function(){
	var box = document.getElementById("container");
	var imgs = box.getElementsByTagName("img");

	//单张图片的宽度
	var imgWidth = imgs[0].offsetWidth;

	//设置掩藏门体露出的宽度
	var exposeWidth = 160;

	//设置容器的总宽度
	var boxWidth = imgWidth + exposeWidth*(imgs.length-1);
	box.style.width = boxWidth + "px";

	//设置每到门的初始位置
	function setImgsPos(){
	for(var i = 1, len = imgs.length; i < len; i++){
          imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + "px";
	}
  }
    setImgsPos();     
    //每道门应该移动的距离
	var translate = imgWidth - exposeWidth;

	for(var i = 0, len = imgs.length; i < len; i++){
		//使用立即调用的函数表达式，为了获得不同的i值
	     (function(i){
	     	imgs[i].onmouseover = function(){
                setImgsPos();
                for(var j = 1;j <= i; j++){
                imgs[j].style.left = parseInt(imgs[j].style.left) - translate + "px";
            }
	     	};
	     })(i);
	}
}