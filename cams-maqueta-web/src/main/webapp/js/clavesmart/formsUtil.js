/**
 * Modulo FormsUtil depende de JQuery
 */
function moduleFormsUtil(){
	
	var formsUtil = {
		MODE: {
			DEBUG: 'DEBUG',
			PRODUCTION: 'PRODUCTION'
		},
		STATE: {
			VALID: "OK",
			INVALID: "INVALID"
		}
	}

	formsUtil.validateCell = function(el){
		if(el.val().length === 9){
			return formsUtil.STATE.VALID;
		}
		return formsUtil.STATE.INVALID;
	}
	
	formsUtil.validateEmail = function(el){
		if(el.val().length > 0){
			return formsUtil.STATE.VALID;
		}
		return formsUtil.STATE.INVALID;
	}
	
	formsUtil.validateOtp = function(el){
		if(el.val().length === 8){
			return formsUtil.STATE.VALID;
		}
		return formsUtil.STATE.INVALID;
	}
	
	formsUtil.evaluateInputs = function(inputs, funcs, showError){
		for(var i = 0; i < inputs.length; ++i)
		{
			var inp = $(inputs[i]);
			var func = funcs[i];
			var state = func(inp);
			if(state !== formsUtil.STATE.VALID)
			{
				if(showError)
				{
					showError(inp);
				}
				return state;
			}
		}
		return formsUtil.STATE.VALID;
	}

	/**
	 * Función para extraer caracteres especiales de teclado,
	 * los mismos no se deben validar al ejecutar keydown
	 */
	formsUtil.validKeysFnc = function(){
		var arrayKeys = [
			37,
			38,
			39,
			40, 
			8,  // Flecha para atrás. [Safari]
			229 // Tecla de tilde [Safari]
		];
		return arrayKeys;
	}
	
	/**
	 * Funcion que registra un regex para validacion de input.
	 * NOTA: El regex debe tener el formato de negacion. /[^{EXPRESION_REGULAR}]/
	 * 		 de este modo se realizará el reemplazo de los caracteres inesperados.
	 */
	formsUtil.registerEvtInput = function(_params){
		
		var params = {
			querySelector: null, 
			regex: null, // Debe terminar en /g
			validKeysFnc: formsUtil.validKeysFnc,
			mode: formsUtil.MODE.PRODUCTION
		}
		
		$.extend(params,_params);
		
		var thread = null;
		
		function printMode(e){
			switch(params.mode){
				case formsUtil.MODE.DEBUG:
					console.debug(params.validKeysFnc(), e.keyCode);
				break;
			}
		}
		
		function validateValue($this){
			thread = setTimeout(function(){
				var value = $this.val();
				var result = value.match(params.regex);
				$this.val(result == null?'':result[0]);
			},50)
		}
		
		$(params.querySelector).bind("paste blur keypress",function(evt){
			var $this = $(this);
			clearTimeout(thread);
			validateValue($this);
		})
		
		$(params.querySelector).bind("keydown",function(e){
			var $this = $(this);
			printMode(e);
			var arrayKeys = params.validKeysFnc();
			if( e.ctrlKey || arrayKeys.indexOf(e.keyCode) > -1 ){
				return true;
			}
			clearTimeout(thread);
			validateValue($this);
		})
		
	}
	
	/**
	 * Autor: Elvis Perez
	 * Realiza un test para verificar que los selectores utilizados 
	 * para seleccionar componentes html sean los correctos.
	 */
	formsUtil.testSelectors = function(obj, parent, _array){
		var consolidado = _array ? _array : [];
		for(var n1 in obj){
			if(obj[n1].constructor == Object){
				formsUtil.testSelectors(obj[n1],parent+"."+n1,consolidado);
			}else{
				$(obj[n1]).attr("test-id",parent+"."+n1);
			}
		}
	}
	
	/**
	 * Actualizacion de formatDecimal
	 * Reemplaza en tbk.js a: getTextDecimalFormat | parsearNumberToDecimal
	 */
	formsUtil.formatDecimal = function(number,dec){
		if(!dec){dec = 2;}
		if(!number){number = 0;}
		var s= '', temp, 
		num= number.toString().split('.'), n=num[0], x=num.length > 1 ? num[1] : '0';
		x = parseFloat("0."+x).toFixed(dec).toString().split(".")[1];
		while(n.length> 3){
			temp= n.substring(n.length-3);
			s= ','+temp+s;
			n= n.slice(0, -3);
		}
		if(n) s= n+s;
		s+='.'+x; 
		return s;
	}
	
	return formsUtil;

}