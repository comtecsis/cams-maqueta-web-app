var CANTIDAD_SCROLL_TABLE = 5;  	

  	function validarServicios(data){  		
  		var messageDiv = $('#idTablaDeudas');  		
  		if(data.resultado == 0){  			
  			return true;
  		}
  		
  		if(data.resultado != 0 || data.resultado != 2){  			
  			messageDiv.html("<table><col width='100%'><tr><td class='subtituloCenter19'>Alerta Pagos</td></tr></table><table class='tableScroll'><col width='100%'><tbody><tr><td	align='center'>"+data.mensaje+"</td><tr></tbody></table>");  			
  			return false;
  		}
  		
  		if(data.resultado == 2){   			  
  		  $('#fCerrando').submit();
  		  return false;
  		}
  	}
  	
  	function generarTablaCargando(img){	 	
		  var tbody = 	$('#idTablaDeudas'); 		
		  var tabla = "<table><col width='100%'><tr><td class='subtituloCenter19'>Alerta Pagos</td></tr></table><table class='tableScroll'><col width='100%'><tbody><tr><td	align='center'><img src='"+ img +"' /></td><tr></tbody></table>";
		  tbody.html(tabla);
	}	
  	
  	function generarTablaDeudas(lista, aplicacionPath, textoMensaje){
  	   var tbody = 	$('#idTablaDeudas');
  	   var n = lista.length;
  	   var tabla = "<div style=\"display: block; overflow-y:auto; overflow-x:hidden; height:300px; \"><form name=\"fAlertaPagos\" id=\"fAlertaPagos\" action=\"\" METHOD=\"POST\"><div style=\"display: block; overflow:auto; overflow-x:hidden; height:300px \"><table><tr><td width=\"578px\"><table><colgroup><col width=\"100%\"></colgroup><tbody><tr><td class=\"subtituloCenter\">Alerta Pagos</td></tr>";
  	   if(textoMensaje==""){
  		   tabla = tabla + "<tr><td class=\"espacioGeneral\">&nbsp;</td></tr>";
  	   }else{
  		   tabla = tabla + "<tr><td class=\"espacioGeneral10px\">&nbsp;</td></tr><tr><td class=\"espacioGeneral negrita\">"+textoMensaje+"</td></tr>";
  	   }
  	   tabla = tabla + "</tbody></table><table class='' border='0'><col width='21%'><col width='24%'><col width='43%'><col width='6%'><col width='6%'><tr><td class='subtituloCenter19'>Servicio</td><td class='subtituloCenter19' colspan=\"2\">Detalle</td><td class='subtituloCenter19'>Pagar</td><td class='subtituloCenter19'>Carrito</td></tr><col width='21%'><col width='24%'><col width='43%'><col width='6%'><col width='6%'><tbody>"; 
  	   var finDiv = "</form></div>";
  	   var descripcionFecha="";

  	   for (var i = 0; i < n; i++) {
  		   
  		   //if(lista[i].urlImagen!=""){
  			   tabla = tabla + "<tr>"+
  			   			"<td rowspan=\"5\" class=\"espacioGeneralBorder textoMensajeCenterBlanco bordeCelda\" background=\""+lista[i].urlImagen+"\" style=\"background-repeat: no-repeat; background-position: center; padding-left:2px; padding-right:2px; border-left: 2px solid #e7e7e7;\" height=\"55px\">"+
  			   			lista[i].nombreEmpresa; 			   
  			   tabla = tabla + "</td><td class=\"detalleNormalNoBorder\">Periodo de Pago:</td><td>" + lista[i].periodoPago + "</td><td rowspan=\"5\" class=\"bordeCelda\"><input id='operacion' name='operacion' type='radio'  onClick='javascript:misubmitServicio(\""+lista[i].idservicio+"\",\""+lista[i].ruc+"\",\""+ lista[i].procedencia +"\")'/></td><td rowspan=\"5\" class=\"bordeCelda\">" + lista[i].checkboxPago + "</td></tr>";
  			
  		   /*}else{
  			   tabla = tabla + "<tr><td rowspan=\"4\" class=\"espacioGeneralBorder textoMensajeCenterBlanco\">"+ lista[i].nombreEmpresa +"</td><td class=\"detalleNormalNoBorder\">Periodo de Pago:</td><td>" + lista[i].periodoPago + "</td><td rowspan=\"2\" class=\"bordeCelda\">Pagar:&nbsp;<input id='operacion' name='operacion' type='radio'  onClick='javascript:misubmitServicio(\""+lista[i].idservicio+"\",\""+lista[i].ruc+"\",\""+ lista[i].procedencia +"\")'/></td></tr>";
  		   }*/
  		   tabla = tabla +
  		   			"<tr><td class=\"detalleNormalNoBorder\">Concepto:</td><td>" + lista[i].servicio+ "</td></tr>" +
  					"<tr><td class=\"detalleNormalNoBorder\">Nro. Servicio:</td><td>" + lista[i].suministro + "</td></tr>" +
  					"<tr><td class=\"detalleNormalNoBorder\">Monto a pagar:</td><td>" + lista[i].montoTotal + "</td></tr>";
  		   
  		 //Verificar Fecha Telefónica
  		   if(lista[i].ruc=="20100017491" || lista[i].ruc=="20100177774"){
  			   tabla = tabla + "<tr><td class=\"detalleNormal\">Fecha de Facturaci&oacute;n:</td><td class=\"detalleNormalNoPadding\">" + lista[i].fechaVencimiento + "</td></tr>";
  		   }else{
  			   tabla = tabla + "<tr><td class=\"detalleNormal\">Fecha de Vencimiento:</td><td class=\"detalleNormalNoPadding\">" + lista[i].fechaVencimiento + "</td></tr>";
  		   }
  		   
  					
  	   }
  	   tbody.html(tabla + "</tbody></table></td><td width=\"10px\">&nbsp;</td></tr></table>" + "<br>"+finDiv);
  	   var botones = '<br><br><div id="botonesAlertaPagoPopup" style="position:relative; bottom:5px; margin-top:5px">' +					 
  		"<a href=\"#\" id=\"btnCerrarAlertaPagos\">" +
  		"<img src=\"/" + aplicacionPath + "/imagenes/btn/alertaPcerrar.png\" border=\"0\" />" +
  		"</a>" +
  		"<a href=\"#\" id=\"btnEnviaCarritoSel\" >" +
  		"<img src=\"/" + aplicacionPath + "/imagenes/btn/enviarcarrito.png\" border=\"0\" />" +
  		"</a>" +
  		"</div>";	
  	   tbody.append(botones); 	   
     } 
   
    function generarResultadoEnvioCarritoPrevio(img){  		
  		var capaOverlay='<div id="idCapaOverlay" tabindex="-1"></div>';
  		capaOverlay = $(capaOverlay); 
  		var contenedor='<div id="idContenedorResultado"></div>';
  		contenedor = $(contenedor);
  		var contenedorTabla = '<div id="idContenedorTabla"></div>';
  		contenedorTabla = $(contenedorTabla);  		
  		var tabla = "<table><col width='100%'><tr><td class='subtituloCenter19'>Alerta Pagos</td></tr></table><table class='tableScroll'><col width='100%'><tbody><tr><td	align='center'><img src='"+ img +"' /></td><tr></tbody></table>"; 	    
 	    var divAceptar = '<div id="divAceptar"><input type="button" class="acciones" id="btnAceptarResultado" value="Aceptar"></div>';
 	    divAceptar = $(divAceptar);
 	    tabla = $(tabla); 		
 		contenedorTabla.append(tabla);
 		$('#simplemodal-container').append(capaOverlay)
 		.append(contenedor)
 		.append(contenedorTabla)
 		.append(divAceptar); 	    
  	}
    
    function generarResultadoEnvioCarrito(data, contexto){
  		//actualizar cantidad elementos de cabecera carrito.   				
  		var tabla;
  		if (isDefined(data.itemsCarrito)){
  			window.parent.frames[2].document.getElementById("totalItems").innerHTML = "("+data.itemsCarrito+")";
  		}
  		var contenedorTabla = $('#idContenedorTabla');
  		contenedorTabla.empty();  		
  		if(data.lista!=null) {		
	 	    var n = data.lista.length;
	 	    tabla ="";
	 	    if(data.resultado == 0){ 	    	
	 	    	tabla = tabla+"<table><col width='100%'><tr><td class='subtituloCenter'>Alerta Pagos</td></tr></table><table class='tableScroll'><col width='100%'><tbody><tr class='formulario_fila'><td class='detalleNormalCenter'>"+data.mensaje+"</td><tr>";
	 		    tabla = tabla+"<tr><td>&nbsp;</td><tr><tr><td>&nbsp;</td><tr>";
	 		    if(n > 0){
	 		    	for (var i = 0; i < n; i++) {
	 		    		tabla = tabla + "<tr><td class='comentariosFinales'>"+data.lista[i].descripcion+"</td><tr><tr><td>&nbsp;</td><tr>";	 		    		
	 		    	}
	 		    }
	 		    tabla=tabla+"</tbody></table>";
	 	    } else if(data.resultado == 1){
	 	    	tabla = tabla+"<table><col width='100%'><tr><td class='subtituloCenter'>Alerta Pagos</td></tr></table><table class='tableScroll'><col width='100%'><tbody><tr class='formulario_fila'><td class='detalleNormalCenter'>"+data.mensaje+"</td><tr>";
	 	    } else if(data.resultado == 2){   			  
	  		  $('#fCerrando').submit();
	  		  return false;
	  		}
 	    } else{
 	    	tabla = tabla+"<table><col width='100%'><tr><td class='subtituloCenter'>Alerta Pagos</td></tr></table><table class='tableScroll'><col width='100%'><tbody><tr class='formulario_fila'><td class='detalleNormalCenter'>"+data.mensaje+"</td><tr>";
 	    } 	    
 	    tabla = $(tabla); 		
 		contenedorTabla.append(tabla); 			    
  	}

    function isDefined( variable) { return (typeof(variable) != "undefined");}