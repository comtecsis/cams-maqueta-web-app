/**
 * Libreria para acciones de validarToken
 * - Depende de framesAction.js y constToken.js
 */

function moduleClaveSmart(){
	
	var obj = {
		idComp: "#ValidacionToken",
		idModal: ".mdlValidacionToken"
	};
	
	function obtainLink(el){
		return el.attr("href") || el.data("link");
	}
		
	function redirectInModal(evt)
	{
		evt.preventDefault();
		console.log("evt:redirectInModal");
		var el = $(evt.target);
		var url = obtainLink(el);
		$.get(url,function(response){
			$(obj.idComp+" "+obj.idModal).html(response);
		})
	}
	
	function redirectToServlet(evt)
	{
		evt.preventDefault();
		console.log("evt:redirectToServlet");
		var el = $(evt.target);
		var url = obtainLink(el);
		miSubmitUnblock(url);
	}
	
	function showResendToken(evt)
	{
		evt.preventDefault();
		console.log("evt:showResendToken");
		$(obj.idComp+" .backModal").removeClass("hidden");
	}
	
	function hideResendToken(evt)
	{
		evt.preventDefault();
		console.log("evt:hideResendToken");
		$(obj.idComp+" .backModal").addClass("hidden");
	}
	
	function callLabelInput(evt){
		evt.preventDefault();
		console.log("evt:callLabelInput");
		var el = $(evt.target).prev();
		el.click();
	}
	
	obj.init = function(domEl, idModal){	
		if(idModal){
			obj.idModal = idModal;
		}
		console.log("Se inicializa claveSmart.js");
		if(domEl !== undefined)
		{
			obj.idComp = domEl;
		}
		$(domEl).live("click",function(evt){
			var el = $(evt.target);
			if(el.hasClass("router"))
			{
				redirectInModal(evt);
			}
			else if(el.hasClass("router-servlet"))
			{
				redirectToServlet(evt);
			}
			else if(el.hasClass("show-resend-token"))
			{
				showResendToken(evt);
			}
			else if(el.hasClass("close-resend-token"))
			{
				hideResendToken(evt);
			}
			else if(el.hasClass("call-label"))
			{
				callLabelInput(evt);
			}
		});	
	}
	
	obj.setCallValidaToken = function(fncCall){
		obj.callValidaToken = fncCall;
	}
	
	obj.setCallValidaTokenError = function(fncCall){
		obj.callValidaTokenError = fncCall;
	}
	
	obj.setCallResendToken = function(fncCall){
		obj.callResendToken = fncCall;
	}
	
	obj.setCallResendTokenError = function(fncCall){
		obj.callResendTokenError = fncCall;
	}
	
	return obj;
}