/**
 * Libreria modificada a partir de pper.js
 * - Se debe declarar la variable JS_CONTEXTO antes de usar esta libreria.
 */
function modulekeyboardLogin() {
	
	var obj = {
		idElement : "#keyToken",
		maxCount: 8
	};

	function Random(N) {
		return Math.floor(N * (Math.random() % 1));
	}

	function clear2(obj) {
		if (obj){
			obj.value = '';
		}
	}

	function invertir(cadena) {
		res = '';
		for (var i = 0; i < cadena.length; i++) {
			res = cadena.charAt(i) + res;
		}
		return res;
	}
	
	function concatena(cadena) {
		cfinal = cadena.substring(0, 5);
		cinicio = cadena.substring(5, 10);
		res = cinicio + cfinal;
		return res;
	}
	
	function dameimpares(cadena) {
		resultado = '';
		for (var i = 1; i < cadena.length; i = i + 2) {
			resultado = cadena.charAt(i) + resultado;
		}
		return resultado;
	}
	
	function damepares(cadena) {
		resultado = '';
		for (var i = 0; i < cadena.length - 1; i = i + 2) {
			resultado = cadena.charAt(i) + resultado;
		}
		return resultado;
	}

	function numKeyPressed2(el, id, ocontrol, ocontrol1, ocontrol2) {
		xc6a81f5d4e6 = getValueAux(el, id);
		auxletras = getLetras(el);
		auxnumeros = getNumeros(el);
		auxletras = concatena(invertir(auxletras));
		auxnumeros = dameimpares(auxnumeros) + damepares(auxnumeros);

		ocontrol1.value = auxletras;
		ocontrol2.value = auxnumeros;
		
		if (ocontrol && (ocontrol.value.length < obj.maxCount)) {
			ocontrol.value += xc6a81f5d4e6;
		}
	}

	function getValue(el, id) {
		return x8bd5e4a3af2(id);
	}

	function getLetras() {
		return obj.letras;
	}

	function getNumeros() {
		return obj.numeros;
	}
	
	function getValueAux(el, id) {
		return y8bd5e4a3af2(id);
	}
	
	function changeImage(objeto, imagen) {
		objeto.src = imagen;
	}
	
	function show() {
		obj.xb44996c8c27();
		obj.x53ea75e752c();
		var img;
		for (x226b8e1112b = 0; x226b8e1112b < obj.x3ba58fc6ac3; x226b8e1112b++) {
			var numeroImagen = obj.x26a4d9e0203[x226b8e1112b];
			var imageNormal = 'pinpad' + numeroImagen + '.png';
			var imageHover = 'pinpad' + numeroImagen + '_over.png';
			img = '<img src="'
					+ obj.rc42509556
					+ imageNormal
					+ '" onmouseover="changeImage(this,\''
					+ obj.rc42509556
					+ imageHover
					+ '\')"  onmouseout="changeImage(this,\''
					+ obj.rc42509556
					+ imageNormal
					+ '\')" width="33" height="21" hspace="2" vspace="2" border="0"/>';
			document.getElementById(obj.numpad_x27c79f1e314 + x226b8e1112b).innerHTML = img;
		}
	}
	function x8bd5e4a3af2(j) {
		return obj.x26a4d9e0203[j];
	}

	function y8bd5e4a3af2(j) {
		return obj.y26a4d9e0203[j];
	}

	function xb44996c8c27() {
		xbbfeb27cffb = new Array(obj.x3ba58fc6ac3);
		for (x226b8e1112b = 0; x226b8e1112b < obj.x3ba58fc6ac3; x226b8e1112b++)
			xbbfeb27cffb[x226b8e1112b] = x226b8e1112b;

		obj.x26a4d9e0203 = Array(obj.x3ba58fc6ac3);

		for (x226b8e1112b = obj.x3ba58fc6ac3 - 1; x226b8e1112b >= 0; x226b8e1112b--) {
			index = Math.floor(Math.random() * x226b8e1112b);
			obj.x26a4d9e0203[x226b8e1112b] = xbbfeb27cffb[index];
			if (index != x226b8e1112b)
				xbbfeb27cffb[index] = xbbfeb27cffb[x226b8e1112b];
		}

		obj.numeros = "";
		for (x226b8e1112b = 0; x226b8e1112b < obj.x3ba58fc6ac3; x226b8e1112b++) {
			obj.numeros += obj.x26a4d9e0203[x226b8e1112b];

		}

		ybbfeb27cffb = new Array(obj.x3ba58fc6ac3);
		obj.y26a4d9e0203 = Array(obj.x3ba58fc6ac3);
		for (x226b8e1112b = 0; x226b8e1112b < obj.x3ba58fc6ac3; x226b8e1112b++) {
			ybbfeb27cffb[x226b8e1112b] = String.fromCharCode(97 + x226b8e1112b);
			obj.y26a4d9e0203[x226b8e1112b] = String
					.fromCharCode(97 + x226b8e1112b);

		}

		for (x226b8e1112b = obj.x3ba58fc6ac3 - 1; x226b8e1112b >= 0; x226b8e1112b--) {
			index = Math.floor(Math.random() * x226b8e1112b);

			if (index != x226b8e1112b) {

				aux = ybbfeb27cffb[index];
				ybbfeb27cffb[index] = ybbfeb27cffb[x226b8e1112b];
				ybbfeb27cffb[x226b8e1112b] = aux;
			}
		}
		obj.letras = "";
		for (x226b8e1112b = 0; x226b8e1112b < obj.x3ba58fc6ac3; x226b8e1112b++) {
			obj.y26a4d9e0203[x226b8e1112b] = ybbfeb27cffb[x226b8e1112b];
			obj.letras += obj.y26a4d9e0203[x226b8e1112b];

		}

	}
	
	function documentWrite(el){
		$(obj.idElement).append(el);
	}

	function xaf54494f38b(j) {
		but_id = obj.numpad_x27c79f1e314 + j;

		xd24965779dd = '<td><a id="' + but_id
				+ '" href="javascript:numKeyPressed(\'' + obj.name + '\',' + j
				+ ')">' + j + '</a></td>';

		documentWrite(xd24965779dd);
	}
	function x802c903a24f() {
		documentWrite('<tr>');
	}
	function xf8febe9d834() {
		documentWrite('\</tr>');
	}
	function x53ea75e752c() {

		documentWrite('<table style="width: 148px; height: 75px;"');

		for (x226b8e1112b = 0; x226b8e1112b < obj.x3ba58fc6ac3; x226b8e1112b++) {

			if (x226b8e1112b % 4 == 0)
				obj.x802c903a24f();
			obj.xaf54494f38b(x226b8e1112b);

			if (x226b8e1112b % 4 == 3)
				obj.xf8febe9d834();

		}

		documentWrite('<td colspan="2"><a id="bclear" href="javascript:clear(\''
						+ obj.name
						+ '\')"><img src="'
						+ obj.rc42509556
						+ 'pinpadlimpiar.png" onmouseover="changeImage(this,\''
						+ obj.rc42509556
						+ 'pinpadlimpiar_over.png\')"  onmouseout="changeImage(this,\''
						+ obj.rc42509556
						+ 'pinpadlimpiar.png\')" width="70" height="21"  hspace="2" vspace="2" border="0"/></a></td>');

		documentWrite('</tr></table>');
	}
	
	function numpad(numpad_id, contexto) {
		obj.x3ba58fc6ac3 = 10;

		obj.xb44996c8c27 = xb44996c8c27;
		obj.show = show;
		obj.x8bd5e4a3af2 = x8bd5e4a3af2;
		// kg
		obj.y8bd5e4a3af2 = y8bd5e4a3af2;

		obj.x53ea75e752c = x53ea75e752c;
		obj.xaf54494f38b = xaf54494f38b;
		obj.x802c903a24f = x802c903a24f;
		obj.xf8febe9d834 = xf8febe9d834;

		if (numpad_id === undefined) {
			numpad_id = 'cc';
		}

		if (contexto === undefined) {
			contexto = JS_CONTEXTO;
		}
		obj.numpad_x27c79f1e314 = numpad_id;
		obj.rc42509556 =  contexto + "imagenes/botones/pinpad/";
		obj.name = 'np_' + numpad_id;
	}
	
	function init(idEl, maxCount){
		if(idEl){
			obj.idElement = idEl;
		}
		if(maxCount){
			obj.maxCount = maxCount;
		}
	}
	
	obj.init = init;
	obj.numpad = numpad;
	obj.show = show;
	obj.clear2 = clear2;
	obj.numKeyPressed2 = numKeyPressed2;
	obj.changeImage = changeImage;

	return obj;
}