// JavaScript Document
window.onload=function()
{
	var oInput=document.getElementsByTagName("input");
	var oSpan=document.getElementsByTagName("span")[0];
	   oInput[2].onclick=function(){
		     var num=parseInt(oInput[0].value)+parseInt(oInput[1].value);
			 oSpan.innerHTML=num;
		   }
	 
}