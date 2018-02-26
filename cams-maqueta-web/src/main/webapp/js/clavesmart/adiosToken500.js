
$(function(){
	
	var formsUtil = moduleFormsUtil();
	var regexUtil = moduleRegexUtil();
	
	var obj = {
		idForm: "#formToken500",
		idTxtOtp: "#txtOtp",
		idBtnVerificar: "#btnVerificar",
	}
	
	function showError(el){
		console.log("Input con error id("+el.attr("id")+")");
	}
	
	function evtChangeForm(evt){
		var state = formsUtil.evaluateInputs(
			[obj.idTxtOtp],
			[formsUtil.validateOtp], 
			showError
		);
		$(obj.idBtnVerificar).prop("disabled", state !== formsUtil.STATE.VALID);
	}
	
	function configEvents(){
		
		$(obj.idForm).live("change", evtChangeForm);
		
		formsUtil.registerEvtInput({
			querySelector: obj.idTxtOtp,
			regex: regexUtil.regexGlobal(regexUtil.REGEX_ONLY_NUMBERS)
		});
		
	}
	
	function init(){
	}
	
	init();
	configEvents();
	
})