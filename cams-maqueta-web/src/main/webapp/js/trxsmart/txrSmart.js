function moduleTrxSmart(){
	
	var obj = {
		idKeyToken: "#keyToken",
		idOptReSend: "#layerResendToken input[name='opt-rsnd-tok']:checked",
		urlServlet: "TrxSmart"
	};
	
	function validateToken(evt)
	{
		evt.preventDefault();
		var keyToken = $(obj.idKeyToken).val();
		var data = {
			"keyToken":keyToken
		};
		$.ajax({
			"url": obj.urlServlet,
			"data": data
		})
		.done(obj.callValidaToken)
		.error(obj.callValidaTokenError);
	}
	
	function sendResendToken(evt){
		evt.preventDefault();
		var optReSend = $(obj.idOptReSend).val();
		var data = {
			"optReSend":optReSend
		};
		$.ajax({
			"url": obj.urlServlet,
			"data": data
		})
		.done(obj.callResendToken)
		.error(obj.callResendTokenError);
	}
	
	function init(idKeyToken, idOptReSend){
		if(idKeyToken){
			obj.idKeyToken = idKeyToken;
		}
		if(idOptReSend){
			obj.idOptReSend = idOptReSend;
		}
	}
	
	obj.init = init;
	obj.sendResendToken = sendResendToken;
	obj.validateToken = validateToken;
	
	return obj;
}