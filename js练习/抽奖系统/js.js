var data = ["饱饱是超级无敌美少女","小微是猪","阿飘超级无敌厉害！！！","我不行了，快扶我到吴彦祖床上","你见到我家傻逼了吗","你是猪吧？","我要代表银河系消灭你","骚年，你的运势不佳啊","妖孽！！！喵帕斯~~~"];
var timer = null,
    flag = 0;

window.onload = function(){	
	  var  play = document.getElementById("play"),
	       stop = document.getElementById("stop");

	 //开始抽奖
	play.onclick = playFun;
	stop.onclick = stopFun;

  //键盘事件
  document.onkeyup = function(event){
  	event = event || window.event;
  	console.log(event.keyCode);
  	if(event.keyCode == 13){
  	  if(flag == 0){
         playFun();
         flag = 1;
  	}else{
         stopFun();
         flag = 0;
  	 } 
    } 
  }
}


function playFun(){
	var title = document.getElementById("title");
	var play = document.getElementById("play");
	clearInterval(timer);
	timer = setInterval(function(){
	   var random = Math.floor(Math.random()*data.length);
	  title.innerHTML = data[random];
	},50);
    play.style.background= "#999";
}

function stopFun(){	
	clearInterval(timer);
	var play = document.getElementById("play");
	play.style.background= "#036";
}