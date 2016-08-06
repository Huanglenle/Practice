function selectFrom(lowerValue,upperValue){
	var choice=upperValue-lowerValue+1;
	return Math.floor(Math.random()*choice+lowerValue);
	}
addLoadEvent(selectFrom);