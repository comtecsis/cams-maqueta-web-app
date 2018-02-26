var CANTIDAD_SCROLL_TABLE = 15;
			
	var typewatch = (function(){
	  var timer = 0;
	  return function(callback, ms){
	    clearTimeout (timer);
	    timer = setTimeout(callback, ms);
	  };  
	})();
	
	function validarKeysUp(event){
			var key = event.keyCode;
			if(key == 32 || key == 13 || key == 27 || (key >= 37 && key <= 40)){					
				  	return false;
			}		
			return true;
	}	
		
	
	
	function misubmitServicio(indice, categoria, idservicio, ruc, nombre){
				$('#categorias').attr("value", categoria);	
				$('#idservicio').attr("value", idservicio);
				$('#ruc').attr("value", ruc);	
				$('#nombre').attr("value", nombre);
				$('#indiceActual').attr("value", indice);
		  		$('#fConsultaMultiPagoServiciosEmpresa').submit();		  	
	}  	
  	function mostrarMensajeError(){
  		var messageDiv = $('#message');
  		messageDiv.show().html("Error al invocar servicio");	
  	}
  	function validarServicios(data){
  		
  		var messageDiv = $('#message');
  		messageDiv.hide().html('');
  		if(data.resultado == 0){  			
  			return true;
  		}
  		
  		if(data.resultado != 0 || data.resultado != 2){  		
  			messageDiv.show().html(data.mensaje);	
  			return false;
  		}
  		
  		if(data.resultado == 2){   			  
  		  $('#fCerrando').submit();	
  		
  		  return false;
  		}
  	}
	function generarTablaCargando(img){	
	 	
		  var tbody = 	$('#idTableBody'); 		
		  var tabla = "<table><col width='25%'><col width='55%'><col width='20%'><tr><td class='subtituloCenter19'>Ruc</td><td class='subtituloCenter19'>Descripción</td><td class='subtituloCenter19'>Seleccionar</td></tr></table><table class='tableScroll'><col width='25%'><col width='55%'><col width='20%'><tbody><tr><td colspan='3' align='center'><img src='"+ img +"' /></td><tr></tbody></table>";
		  tbody.html(tabla);       
	}
	
	function generarTablaServicios(lista){	
 	
 		  var tbody = 	$('#idTableBody'); 		
 		  var n = lista.length;
 		  var tabla = "<table><col width='25%'><col width='55%'><col width='20%'><tr><td class='subtituloCenter19'>Ruc</td><td class='subtituloCenter19'>Descripción</td><td class='subtituloCenter19'>Seleccionar</td></tr></table><table class='tableScroll'><col width='25%'><col width='55%'><col width='20%'><tbody>";
 		  var finDiv ="";
 		  if(n > CANTIDAD_SCROLL_TABLE){
 			 tabla = "<table class='tableScroll'><col width='25%'><col width='55%'><col width='20%'><tr><td class='subtituloCenter19'>Ruc</td><td class='subtituloCenter19'>Descripción</td><td class='subtituloCenter19'>Seleccionar</td></tr></table><div class='tableContainer'><table class='tableScroll'><col width='25%'><col width='55%'><col width='20%'><tbody>";
 			 finDiv = "</div>"; 		
 		  } 		  
          for (var i = 0; i < n; i++) {            
             tabla = tabla + "<tr class='producto_fila18'><td class='detalleNormalCentrado'>" +  lista[i].ruc + "</td><td class='detalleNormal'>" +  lista[i].nombre + "</td><td class='detalleNormalCentrado'><input id='operacion' name='operacion' type='radio'  onClick='javascript:misubmitServicio(\""+i+"\",\""+lista[i].categoria+"\",\""+ lista[i].idservicio +"\",\""+ lista[i].ruc +"\",\""+ lista[i].nombre +"\")'/> </td></tr>";              
           }          
          tbody.html(tabla + "</tbody></table>" + finDiv);       
 	}
  	
	
 
   var caracteres = function() {      
     return replaceDiacritics($('#nombreEmpresa').attr("value"));           
   };            	
	
	