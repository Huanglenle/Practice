    function getSelectedText(name){
  	var obj=document.getElementById(name);
    var index=obj.selectedIndex;
    var c=obj.options[index].text;
    return c;
 }

    function eat(){   
 	var text=getSelectedText("eatList");
    if(text=="早餐"){
            breakfirst();
    }else{
    	    lunch();
    }

}
    function breakfirst(){
    var lists=["南区食堂","美食城","福田糕点"];
    var list=lists[selectFrom(0,lists.length-1)];
    alert(list);
}

    function lunch(){
    var lists=["教工食堂","南区食堂","美食城","小白菜炒粉"];
    var list=lists[selectFrom(0,lists.length-1)];
    alert(list);
}
  



