var idp1n = "QWERS124";
var contexto="";

/*CAPTCHA*/
/*###############################################*/
function captcha(){		
	document.fLogin.codImgUsuario.value="";			
	var d = new Date();
	document.getElementById("vertimg").src = "/"+contexto+"/simpleImgAgl.jpg?ID="+d.getTime();/**/	
}

function recaptcha(){
	document.fLogin.codImgUsuario.value="";			
	var d = new Date();
	document.getElementById("vertimg").src = "/"+contexto+"/simpleImgAgl.jpg?IDR="+d.getTime();/**/	
}
/*###############################################*/

function getCookie(name) {
	if (document.cookie.length > 0) {
		begin = document.cookie.indexOf(name+"=");
		if (begin != -1) {
			begin += name.length+1;
			end = document.cookie.indexOf(";", begin);
			if (end == -1) end = document.cookie.length;
			return unescape(document.cookie.substring(begin, end));
		}
	}
	return null;
}


function seteaTextoEmpresa(tipo_Nro, campoTxt,evento) {
	var txtTarjeta=document.getElementById('textoTarjeta');
	var texto=document.getElementById('textoLogin');
	var campoTxtTarjeta=document.getElementById(campoTxt);
	
    var splitted = tipo_Nro.split("R");

    var tipo= splitted[0];
    var nrodig= splitted[1];
    
    
    if(evento!='C'){campoTxtTarjeta.value="";}
    
    campoTxtTarjeta.maxLength =nrodig;
    
    
	if(nrodig=='00'){
		txtTarjeta.innerHTML='Ingrese su número de tarjeta';
		campoTxtTarjeta.maxLength =16;
	}else if(nrodig=='16'){
		txtTarjeta.innerHTML='Los 16 dígitos de su tarjeta';
	}else{
		txtTarjeta.innerHTML='Últimos '+nrodig+' dígitos de su tarjeta';
	}
	
	
	if(tipo=='05'){
		texto.innerHTML='Ingrese su clave de <span class="tituloNegro">Seguridad</span>';
	}else{
		texto.innerHTML='Ingrese su clave principal';
	}
}

function seteaTextoPersona(tipo_Nro, campoTxt,evento) {
	var txtTarjeta=document.getElementById('textoTarjeta');
	
	campoTxtTarjeta=document.getElementById(campoTxt);
	
    var splitted = tipo_Nro.split("R");

    var tipo= splitted[0];
    var nrodig= splitted[1];
    
    if(evento!='C'){campoTxtTarjeta.value="";}
    
    campoTxtTarjeta.maxLength =nrodig;


	if(nrodig=='00'){
		txtTarjeta.innerHTML='Ingrese su número de tarjeta';
		campoTxtTarjeta.maxLength =16;
	}else if(nrodig=='16'){
		txtTarjeta.innerHTML='Los 16 dígitos de su tarjeta';
	}else{
		txtTarjeta.innerHTML='Últimos '+nrodig+' dígitos de su tarjeta';
	}
    
}