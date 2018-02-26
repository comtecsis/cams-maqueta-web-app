
$(function(){
	
	var formsUtil = moduleFormsUtil();
	var regexUtil = moduleRegexUtil();
	
	var obj = {
		idForm: "#formToken600",
		idTxtCellA: "#txtCellA",
		idTxtCellB: "#txtCellB",
		idtxtEmailA: "#txtEmailA",
		idtxtEmailB: "#txtEmailB",
		idBtnVerificar: "#btnVerificar",
		idChkTermCond: "#chkTermCond"
	}
	
	function validateEmail(el){
		if(el.val().length > 0){
			return formsUtil.STATE.VALID;
		}
		return formsUtil.STATE.INVALID;
	}
	
	function validateCheck(el){
		return el.prop("checked");
	}
	
	function showError(el){
		console.log("Input con error id("+el.attr("id")+")");
	}
	
	function evtChangeForm(evt){
		var state = formsUtil.evaluateInputs(
			[obj.idtxtEmailA, obj.idtxtEmailB, obj.idTxtCellA, obj.idTxtCellB, obj.idChkTermCond],
			[formsUtil.validateEmail, formsUtil.validateEmail, formsUtil.validateCell, formsUtil.validateCell, validateCheck], 
			showError
		);
		$(obj.idBtnVerificar).prop("disabled", state !== formsUtil.STATE.VALID);
	}
	
	function configEvents(){
		
		$(obj.idForm).live("change", evtChangeForm);
		
		var comps = [obj.idTxtCellA, obj.idTxtCellB];
		
		formsUtil.registerEvtInput({
			querySelector: comps.join(),
			regex: regexUtil.regexGlobal(regexUtil.REGEX_ONLY_NUMBERS)
		});
		
		comps = [obj.idtxtEmailA, obj.idtxtEmailB];
		
		formsUtil.registerEvtInput({
			querySelector: comps.join(),
			regex: regexUtil.regexGlobal(regexUtil.REGEX_EMAIL)
		});
		
	}
	
	function init(){
	}
	
	init();
	configEvents();
	
})