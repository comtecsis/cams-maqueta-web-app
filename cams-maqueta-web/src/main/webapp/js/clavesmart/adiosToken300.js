$(function(){
	
	var obj = {
		idRadioEmail: "#radioEmail",
		idRadioSms: "#radioSms",
		idBtnSend: "#btnSend"
	}
	
	var text = {
		sendEmail: "Recibirla por e-mail",
		sendSms: "Recibirla por SMS",
	}
	
	function changeMsg(){
		var elRadioSms = $(obj.idRadioSms);
		var elRadioEmail = $(obj.idRadioEmail);
		var elBtnSend = $(obj.idBtnSend);
		if(elRadioSms.prop("checked"))
		{
			elBtnSend.html(text.sendSms);
		}
		else if(elRadioEmail.prop("checked"))
		{
			elBtnSend.html(text.sendEmail);
		}
	}
	
	function evtChangeRadioBtn(evt){
		var el = $(evt.target);
		var layer_group = el.closest(".layer-group");
		layer_group.find(".layer-radio").removeClass("active");
		var layer = el.closest(".layer-radio");
		layer.addClass("active");
		changeMsg();
	}
	
	function configEvents(){
		$(".layer-radio input[type=radio]").live("change",evtChangeRadioBtn);
	}
	
	function init(){
		
	}
	
	init();
	configEvents();
	
})