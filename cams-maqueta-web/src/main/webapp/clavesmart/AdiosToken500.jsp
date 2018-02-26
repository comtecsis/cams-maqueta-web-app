<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ include file="/includes/taglibs.jsp"%>
<jsp:useBean id="CONTEXTO" class="java.lang.String" scope="application" />

<div class="m-bottom text-center">
	<p>
		<img src="/bancaInternet/imagenes/clavesmart/Cellphone@2x.png" />
	</p>
</div>

<p class="m-bottom ">
	Te hemos enviado un SMS con tu código de verificación a: <span
		class='negrita'>damianramirez@gmail.com</span>
</p>

<form id="formToken500">

	<div class="m-bottom">
		<p>Ingresa tu código de verificación</p>
		<p>
			<input type="password" size="8" maxlength="8" id="txtOtp" />
		</p>
	</div>

	<div class="m-bottom-49">
		¿No la recibistes? <a href="" class="router text-link">Reenviar
			código</a>
	</div>

	<div class="m-bottom text-center">
		<button type="button" class="btn bkg-red acciones router"
			data-link="ClaveSmart?step=6" id="btnVerificar">Verificar y
			continuar</button>
	</div>
	
</form>

<script type="text/javascript"
	src="/bancaInternet/js/clavesmart/adiosToken500.js?version=${cssversion}"></script>