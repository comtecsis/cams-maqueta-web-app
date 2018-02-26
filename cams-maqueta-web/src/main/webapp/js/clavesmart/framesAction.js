/**
 * Libreria para administración de frames.
 * - Se debe declarar la variable JS_CONTEXTO antes de usar esta libreria.
 */
function bloquearFrames() {
	window.parent.frames[0].$.blockUI({
		message : ""
	});
	window.parent.frames[2].$.blockUI({
		message : ""
	});
	window.parent.frames[1].$.blockUI({
		message : ""
	});
}

function desbloquearFrames() {
	window.parent.frames[0].$.unblockUI();
	window.parent.frames[2].$.unblockUI();
	window.parent.frames[1].$.unblockUI();
}

function miSubmitUnblock(servlet) {
	document.fPop.action = JS_CONTEXTO + servlet;
	document.fPop.submit();
	desbloquearFrames();
}