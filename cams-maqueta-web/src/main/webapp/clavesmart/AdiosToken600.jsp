<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ include file="/includes/taglibs.jsp"%>
<jsp:useBean id="CONTEXTO" class="java.lang.String" scope="application" />

<p class="m-bottom title" style="">Ingresa tus datos personales.</p>
<form id="formToken600">
	<div class="m-bottom">
		<p>Correo Electrónico seguro</p>
		<p>
			<input type="text" size="25" maxlength="10000" id="txtEmailA">
		</p>
	</div>
	<div class="m-bottom">
		<p>Correo Electrónico seguro</p>
		<p>
			<input type="text" size="25" maxlength="10000" id="txtEmailB">
		</p>
	</div>
	<div class="m-bottom">
		<p>Número de celular seguro</p>
	
		<p>
			<input type="text" size="25" maxlength="9" id="txtCellA">
		</p>
	</div>
	<div class="m-bottom">
		<p>Número de celular seguro</p>
		<p>
			<input type="text" size="25" maxlength="9" id="txtCellB">
		</p>
	</div>
	
	<p class="m-bottom">Te recomendamos verificar ambos datos para
		aprovechar al máximo tu ClaveSmart.</p>
	
	<p class="m-bottom">
		<input type="checkbox" id="chkTermCond" name="cc"> <label for="chkTermCond"></label>
		Acepto los<a href="" class="router text-link">Terminos y
			condiciones</a>
	</p>
	
	<p class="m-bottom">
		<button type="button"
			class="btn bkg-red acciones router"
			data-link="ClaveSmart?step=4" disabled="disabled" id="btnVerificar">Verificar</button>
	</p>
</form>

<script type="text/javascript"
	src="/bancaInternet/js/clavesmart/adiosToken600.js?version=${cssversion}"></script>
