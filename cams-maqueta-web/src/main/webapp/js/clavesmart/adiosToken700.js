var keyboardLogin = modulekeyboardLogin();

var elKeyToken = document.getElementById("keyToken");
var encLetras = document.getElementById("encLetras");
var encNumeros = document.getElementById("encNumeros");
var btnSendToken = document.getElementById("btnSendToken");

function evaluateBtnSendVerified()
{
	btnSendToken.disabled = elKeyToken.value.length !== 8;
}

function clear()
{
	keyboardLogin.clear2(elKeyToken);
	evaluateBtnSendVerified();
}

function numKeyPressed(obj, id)
{
	keyboardLogin.numKeyPressed2(obj, id, elKeyToken, encLetras, encNumeros );
	evaluateBtnSendVerified();
}

function changeImage(objeto, imagen){
	keyboardLogin.changeImage(objeto, imagen);
}

$(function(){
	
	var obj = {
		layerKeyboard: "#layerKeyboard"
	}
	
	function configEvents(){
	}
	
	function init(){
		keyboardLogin.init(obj.layerKeyboard);
		keyboardLogin.numpad();
		keyboardLogin.show();
	}
	
	init();
	configEvents();
	
})