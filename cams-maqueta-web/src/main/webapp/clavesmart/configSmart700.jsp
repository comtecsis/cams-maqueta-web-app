<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ include file="/includes/taglibs.jsp"%>
<jsp:useBean id="CONTEXTO" class="java.lang.String" scope="application" />

<div class="m-bottom text-center title">
	Envia la ClaveSmart vía
</div>

<div class="layer-group">
	<div>
		<div class="layer-radio">
			<div class="seg-1">
				<input type="radio" name="opt-send-token" selected="selected">
				<label class="call-label"></label>
			</div>
			<div class="seg-2">
				Por SMS
				<div class="text-bold">Deberás verificarlo</div>
			</div>
		</div>
	</div>
	
	<div class="m-bottom">
		<div class="layer-radio active">
			<div class="seg-1">
				<input type="radio" name="opt-send-token">
				<label class="call-label"></label>
			</div>
			<div class="seg-2">
				Por SMS
				<div class="text-bold">Deberás verificarlo</div>
			</div>
		</div>
	</div>
</div>

<p class="m-bottom2">
	<input type="button" value="Cancelar"
		class="btn btn-white acciones router btn_verificaL"
		href="ClaveSmart?template=AdiosToken8">
		
	<input type="button" value="Enviar"
		class="btn bkg-red acciones router btn_verificaR"
		href="ClaveSmart?template=AdiosToken8">
</p>

<script type="text/javascript"
	src="/bancaInternet/js/clavesmart/adiosToken300.js?version=${cssversion}"></script>