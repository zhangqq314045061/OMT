$(function(){

	var ul=$('.box-lunbo ul')
	var li=ul.find('li')
	var i=1;
	var offset= li.width();
	setInterval(function(){
	ul.css('marginLeft',-i*offset);
	i+=1;
	if(i===li.length){i=0}
	},1000)









	






	
})