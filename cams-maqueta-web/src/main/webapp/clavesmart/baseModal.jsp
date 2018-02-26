<%@page import="java.util.ArrayList"%>
<%@ include file="/includes/taglibs.jsp"%>
<jsp:useBean id="CONTEXTO" class="java.lang.String" scope="application" />
<jsp:useBean id="NAPLISOL" class="java.lang.String" scope="application" />
<html>
<head>
<title><%=NAPLISOL%> - Relación de operaciones programadas</title>
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Expires" CONTENT="-1">

<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
<link href="/bancaInternet/css/botones.css?version=${cssversion}"
	rel="stylesheet" type="text/css">
<link href="/bancaInternet/css/standard.css?version=${cssversion}"
	rel="stylesheet" type="text/css" />
<link href="/bancaInternet/css/personas.css?version=${cssversion}"
	rel="stylesheet" type="text/css" />
<link href="/bancaInternet/css/clavesmart.css?version=${cssversion}"
	rel="stylesheet" type="text/css" />

<script type="text/javascript">
	var JS_CONTEXTO = "/<%=CONTEXTO%>/";
</script>
<script type="text/javascript"
	src="/bancaInternet/js/jquery/jquery-1.6.2.js?version=${cssversion}"></script>
<script type="text/javascript"
	src="/bancaInternet/js/clavesmart/framesAction.js?version=${cssversion}"></script>
<script type="text/javascript"
	src="/bancaInternet/js/clavesmart/constToken.js?version=${cssversion}"></script>
<script type="text/javascript"
	src="/bancaInternet/js/clavesmart/claveSmart.js?version=${cssversion}"></script>
<script type="text/javascript"
	src="/bancaInternet/js/clavesmart/keysAction.js?version=${cssversion}"></script>
<script type="text/javascript" src="/<%=CONTEXTO%>/js/clavesmart/keyboardLogin.js"></script>
<script type="text/javascript" src="/<%=CONTEXTO%>/js/clavesmart/regexUtils.js"></script>
<script type="text/javascript" src="/<%=CONTEXTO%>/js/clavesmart/formsUtil.js"></script>

<script type="text/javascript">
	$(function(){
		var claveSmart = moduleClaveSmart();
		claveSmart.init("#ValidacionToken");
	});
</script>

</head>

<body onload="">
	<form name="fPop" method="POST" TARGET=body></form>
	
	<div id="ValidacionToken" class="backModal">
		<div class="mdlValidacionToken">
			<jsp:include page="AdiosToken200.jsp"/>
		</div>
	</div>
	<script type="text/javascript">
		setTimeout(bloquearFrames, 400);
	</script>
</body>
</html>
