<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ include file="/includes/taglibs.jsp"%>
<jsp:useBean id="CONTEXTO" class="java.lang.String" scope="application" />

<p class="m-bottom ">Para verificar tu correo electrónico debes ingresar tu 
ClaveSmart que te hemos enviado por SMS al: 
<span class='negrita'>999999999</span></p>

<div class="m-bottom">
	<p>Ingresa tu ClaveSmart</p>
	<p>
		<input type="password" size="8" maxlength="10000">
	</p>
</div>

<p class="m-bottom-49">
	¿No la recibistes? <a href="" class="router text-link">Enviar de nuevo</a>
</p>

<p class="m-bottom text-center">
	<input type="button" value="Continuar"
		class="btn bkg-red acciones router"
		href="ClaveSmart?template=AdiosToken8">
</p>
<div class="m-bottom text-center">
	<a class="router text-link" href="ClaveSmart?template=AdiosToken300">Verificar luego</a>
</div>
