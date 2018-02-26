<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ include file="/includes/taglibs.jsp"%>
<jsp:useBean id="CONTEXTO" class="java.lang.String" scope="application" />

<div class="m-bottom text-center">
	<p><img src="/bancaInternet/imagenes/clavesmart/Confeti.png"/></p>
	<p class="title-header">ClaveSmart&#x2122;</p>
</div>

<div class="m-bottom">
	¿Cómo prefieres recibirla de ahora en adelante?
</div>

<form id="formToken300">
	<div class="layer-group">
		<div class="m-bottom">
			<div class="layer-radio">
				<div class="seg-1">
					<input type="radio" name="opt-send-token" id="radioEmail" selected="selected">
					<label class="call-label"></label>
				</div>
				<div class="seg-2">
					Por e-mail
					<div class="text-bold">Deberás verificarlo</div>
				</div>
				<div class="seg-3">
		    <a href="#">Verificar</a>
				</div>
			</div>
		</div>
		
		<div class="m-bottom">
			<div class="layer-radio active">
				<div class="seg-1">
					<input type="radio" name="opt-send-token" id="radioSms">
					<label class="call-label"></label>
				</div>
				<div class="seg-2">
					Por SMS
					<div class="text-bold">Deberás verificarlo</div>
				</div>
				<div class="seg-3">
					<a href="#">Verificar</a>
				</div>
			</div>
		</div>
	</div>
	
	<div class="m-bottom">
		Te recomendamos verificar tu correo electrónico para recibir tu ClaveSmart vía e-mail cuando estés en el exrtranjero.
	</div>
	
	<div class="m-bottom text-center">
		<button class="btn bkg-red acciones router" id="btnSend" data-link="ClaveSmart?step=7">Recibirla por SMS</button>
	</div>

</form>

<script type="text/javascript"
	src="/bancaInternet/js/clavesmart/adiosToken300.js?version=${cssversion}"></script>