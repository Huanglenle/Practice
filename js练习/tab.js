function a(id){
	return typeof id=='string'?document.getElementById(id):id;
}

window.onload=function(){
	//获取鼠标滑过或要点击的标签和要切换的内容
	var titles=a('notice-list').getElementsByTagName('li');
	     divs=a('notice-con').getElementsByTagName('div');
	if(titles.length!= divs.length)
	return;

    //遍历titles下所有的li
    for(var i=0;i<titles.length;i++){
    	titles[i].id=i;
    	titles[i].onmouseover=function(){
    		//清除所有li上的class
    		for(var j=0;j<titles.length;j++){
    			titles[j].className='';
    			divs[j].style.display='none';
    		}
    		//设置当前为高亮
    		this.className='select';	
    		divs[this.id].style.display='block';
    	}
    }   
}