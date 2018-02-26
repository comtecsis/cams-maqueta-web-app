var ventana;
var scroll;
var overview;
var viewport;
var dy = 200;

$(document).ready(function(){
	ventana = $(parent.window);
	scroll = $('#scrollbar1');
	overview = $('.overview');
	viewport = $('.viewport');
	ventana.bind('resize', function(){			
		viewport.height(ventana.height() - dy);
		scroll.tinyscrollbar_update();
	}); 
	$('#scrollbar1').mouseleave(function() {  			
		menuOriginal();
	}); 
	
	$('#scrollbar1').mouseenter(function() { 
		var position = overview.position();
		if(position.top < 0){
			overview.css({'top':'0px'});
		}
		scroll.tinyscrollbar_update();
		if(overview.height() > (ventana.height() - dy)){//Mostrar scroll
			menuScrollbar();
		}
	});                                       
 });