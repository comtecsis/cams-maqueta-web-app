<%@ include file="/includes/taglibs.jsp"%>
<jsp:useBean id="CONTEXTO" class="java.lang.String" scope="application" />
<%
	String nroCelular = request.getParameter("nroCelular");
%>
<html>
	<head>
		<link href="/bancaInternet/css/botones.css?version=${cssversion}"
			rel="stylesheet" type="text/css">
		<link href="/bancaInternet/css/standard.css?version=${cssversion}"
			rel="stylesheet" type="text/css" />
		<link href="/bancaInternet/css/personas.css?version=${cssversion}"
			rel="stylesheet" type="text/css" />
		<link href="/bancaInternet/css/validaToken.css?version=${cssversion}"
			rel="stylesheet" type="text/css" />
	</head>
	<body>
	<div id="ValidacionToken">
		<p>Para culminar esta operaci&oacute;n, ingresa tu clave Token y haz 'click' en el bot&oacute;n  <span class='negrita'>'Ejecutar'</span>.</p>
		<p>Para seguir realizando otras operaciones haz 'click' en el bot&oacute;n  <span class='negrita'>'Agregar a Carrito' </span>.</p>
		<p>Ingresa la ClaveSmart que te hemos enviado al <%=nroCelular%></p>
		<p><input id="keyToken"/><input type="button" value="Continuar" class="bkg-red acciones valid-token"></p>
		<p>¿No la recibiste? <a href="#" class="text-link show-resend-token">Enviar de nuevo</a></p>
		<p><a href="#" class="text-link">Enviar ClaveSmart por otro medio</a></p>
		<div class="backModal hidden">
			<div class="mdlSendKeySmart">
				<jsp:include page="sendKeySmart1.jsp"/>
			</div>
		</div>
	</div>
	<script type="text/javascript"
		src="/bancaInternet/js/jquery/jquery-1.6.2.js?version=${cssversion}"></script>
	<script type="text/javascript"
		src="/bancaInternet/js/constToken.js?version=${cssversion}"></script>
	<script type="text/javascript"
		src="/bancaInternet/js/validaToken.js?version=${cssversion}"></script>
	<script type="text/javascript">
		$(function(){
			var validaToken = moduleValidaToken();
			validaToken.init("#ValidacionToken");
			validaToken.setCallValidaToken(function(response){
				console.log("----- Traza de response ----");
				console.log(response);
			})
		});
	</script>
	</body>
</html>