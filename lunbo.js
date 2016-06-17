(function($){


var lunbo=function(config){
   var defaultconfig={
  interval:2000,
  step :$.noop
   }


	$.extend(defaultconfig,config)
  var ul=this.find('ul');
  var  li=ul.find('li');
  var index=1;
  var off=li.outerWidth(true);
    setInterval(function(){
    	ul.animate({'marginLeft':-index*off},600);
    	defaultconfig.step(index);
    	index+=1;
    	if(index===li.length){index=0}
    },defaultconfig.interval)

	return this;
}


	$.fn.extend({lunbo:lunbo})

})(jQuery);