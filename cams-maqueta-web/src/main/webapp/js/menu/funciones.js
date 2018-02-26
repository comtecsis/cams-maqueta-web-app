function invocaServletxMenu(servlet, enlace) {
	reseteaClaseCSSLink();
	seteaClaseCSSLink(enlace);	
	document.fOpciones.action = servlet;
	document.fOpciones.submit();
}

function invocaServletxMenuPadre(servlet, id) {	
	var objeto = "span" + id;
	resetearClaseCSSSeleccion();
	ocultarTodo();
	document.getElementById(objeto).className = "opcionSeleccionada";
	if(overview.height() > (ventana.height() - dy)){//Mostrar scroll
		menuScrollbar();
	} else {
		var position = overview.position();
		if(position.top < 0){
			overview.css({'top':'0px'});
		}
		menuOriginal();
	}
	document.fOpciones.action = servlet;
	document.fOpciones.submit();
}

function misubmitSalir() {
	if (parent.cierra) {
		parent.cierra = false;
		document.fCerrando.submit();
	}
}

function seteaClaseCSSLink(enlace) {
	var seleccion = enlace.substring(4, enlace.length);
	var lista = "li" + seleccion;
	document.getElementById(lista).className = "itemSeleccionado";
}
function reseteaClaseCSSLink() {
	var links = document.getElementsByTagName('div');
	var temp = "";
	var aux;
	for ( var i = 0; i < links.length; i++) {
		temp = links[i].id;
		if (temp.length > 2) {
			aux = temp.substring(0, 2);
			if ("li" == aux) {
				links[i].className = "item";
			}

		}
	}
}

function expandirDivSeleccionado(capa) {
	var seleccion = document.getElementById(capa).style.display;
	div = document.getElementById(capa);
	if (seleccion == "none") {
		div.style.display = 'block';
	} else if (seleccion == "block") {
		div.style.display = 'none';
	} else {
		div.style.display = 'block';
	}

}

function resetearClaseCSSSeleccion() {
	var spans = document.getElementsByTagName('span');
	var cadena = "span";
	for ( var i = 0; i < spans.length; i++) {
		temp = spans[i].id;
		if (temp.length > 4) {
			aux = temp.substring(0, 4);
			if (aux == cadena) {
				document.getElementById(temp).className = "button1";
			}
		}
	}
}
function obtieneStyleDiv(capa) {
	return document.getElementById(capa).style.display;
}

function cuentaStyleBlocks() {
	var divs = document.getElementsByTagName('div');
	var cadena = "operaciones";
	var temp;
	var aux;
	var contador = 0;
	for ( var i = 0; i < divs.length; i++) {
		temp = divs[i].id;
		if (temp.length > 11) {
			aux = temp.substring(0, 11);
			if (aux == cadena) {
				if (document.getElementById(temp).style.display == 'block') {
					contador++;
				}
			}
		}
	}
	return contador;
}
function ocultarTodosDiv() {
	var divs = document.getElementsByTagName('div');
	var cadena = "operaciones";
	var temp;
	var aux;
	for ( var i = 0; i < divs.length; i++) {
		temp = divs[i].id;
		if (temp.length > 11) {
			aux = temp.substring(0, 11);
			if (aux == cadena) {
				divs[i].style.display = 'none';
			}
		}
	}
}

function ocultarTodo() {
	var divs = document.getElementsByTagName('div');
	var cadena = "operaciones";
	var temp;
	var aux;
	for ( var i = 0; i < divs.length; i++) {
		temp = divs[i].id;
		if (temp.length > 11) {
			aux = temp.substring(0, 11);
			if (aux == cadena) {
				divs[i].style.display = 'none';
			}
		}
	}
}
function MostrarOcultar(valor, capa, id) {	
	var seleccionado = cuentaStyleBlocks();
	var objeto = "span" + id;
	reseteaClaseCSSLink();
	if (seleccionado == 0) {
		if (valor == true) {
			resetearClaseCSSSeleccion();
			expandirDivSeleccionado(capa);
			document.getElementById(objeto).className = "opcionSeleccionada";
		} else {
			document.getElementById(objeto).className = "opcionSeleccionada";
		}
	} else {
		if (valor == true) { // es div
			seleccionado = obtieneStyleDiv(capa);
			if (seleccionado == 'block') {
				ocultarTodosDiv();
			} else {
				ocultarTodosDiv();
				resetearClaseCSSSeleccion();
				document.getElementById(objeto).className = "opcionSeleccionada";
				expandirDivSeleccionado(capa);
			}
		} else {// es un ahref
			ocultarTodo();
			resetearClaseCSSSeleccion();
			document.getElementById(objeto).className = "opcionSeleccionada";
		}
	}
	if(overview.height() > (ventana.height() - dy)){//Mostrar scroll
		menuScrollbar();
	} else {
		menuOriginal();
	}		
}

function seteaMenuInicial() {
	ocultarTodo();
	document.getElementById("span0").className = "opcionSeleccionada";
	scroll.tinyscrollbar();
	menuOriginal();
}

function menuOriginal(){
	$('.scrollbar').hide();	
	$('.viewport').css('width', '190px');
	$('.operaciones').css('width', '190px');
	$('body').css('background-position', '0px 0px');
	$('.button1').css('width', '179px');
	$('.item').css('width', '179px');
	$('.itemSeleccionado').css('width', '179px');
	$('.opcionSeleccionada').css('width', '179px');
	$('.flechaBajo').removeClass('derecha10px');
	scroll.tinyscrollbar_update();
}

function menuScrollbar(){
	$('.scrollbar').show();	
	$('.viewport').css('width', '174px');
	$('.operaciones').css('width', '180px');	
	$('.button1').css('width', '179px');
	$('.item').css('width', '179px');
	$('.itemSeleccionado').css('width', '179px');
	$('.opcionSeleccionada').css('width', '179px');
	$('.flechaBajo').removeClass('derecha10px').addClass('derecha10px');
	scroll.tinyscrollbar_update('relative');
}
