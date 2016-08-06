function welcome(){
	alert("Welcome to here,my master,I am your pet rock.");
	var name=prompt("What is your name?","");
    if(name!==null){
    	alert(name+",it's my pleasure to survice for you.");
    }else{
    	alert("Plesae input your name!");
    }
}
addLoadEvent(welcome);