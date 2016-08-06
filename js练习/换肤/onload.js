// JavaScript Document
 function addLoadEvent(func)
 {
	 var oldonload=window.onload;//将事件处理函数的值存入变量oldonload
	 if(typeof window.onload!='function')//判断是否已经有函数绑定了window.onload这个处理函数
	 {
	 window.onload=func; //如果在这个处理函数上还没有绑定任何函数，像平时一样添加新函数
	 }
	 else
	 {                         //如果在这个处理函数上已经绑定了其他函数，把新函数追加到现有指令的末尾
		 window.onload=function() //创建匿名函数来容纳oldonload（）和func()
		    { 
			 oldonload();       //脱离这个函数之后的形式为：window.onload=oldonload;
			 func();           //window.onload=func;
			 }
	 }
 }