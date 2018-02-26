<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ include file="/includes/taglibs.jsp"%>
<jsp:useBean id="CONTEXTO" class="java.lang.String" scope="application" />
<%@ page import="java.util.List" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.util.ArrayList" %>
<% 
	int count = 5;
	List<String> msgs = new ArrayList();
	while(--count >= 0){
		msgs.add((String)request.getAttribute("thread-"+count));
	}
%>
<div class="m-bottom">
	<% for(String msg : msgs){ %>
	<p><%=msg %></p>
	<%} %>
	<p><%=new Date().toString() %></p>
</div>
<p class="title m-bottom">Para verificar tus datos ingresa tu Clave Token por &uacute;ltima vez.</p>

<div class="m-bottom">
	<p>Ingresa tu clave token</p>
	<p>
		<input type="password" size="25" maxlength="10000" id="keyToken"/>
		<input type="hidden" name="claves" value="" id="encLetras"/> 
		<input type="hidden" name="numeros" value="" id="encNumeros"/>
	</p>
</div>

<div class="m-bottom" id="layerKeyboard">
</div>

<div class="m-bottom-79">
	<a href="#" class="text-link"><span class="ic ic-excl"></span>No tengo mi token.</a>
</div>

<div class="m-bottom text-center">
	<button class="btn bkg-red acciones router" data-link="ClaveSmart?step=3" disabled="disabled" id="btnSendToken">Verificar</button>
</div>
<div class="m-bottom text-center">
	<a class="router text-link" href="ClaveSmart?step=1">Verificar luego</a>
</div>

<script type="text/javascript"
	src="/bancaInternet/js/clavesmart/adiosToken700.js?version=${cssversion}"></script>