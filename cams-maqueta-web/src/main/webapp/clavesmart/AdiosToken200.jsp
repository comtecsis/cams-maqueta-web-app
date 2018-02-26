<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
	<%@ include file="/includes/taglibs.jsp"%>
<jsp:useBean id="CONTEXTO" class="java.lang.String" scope="application" />

<%
	Boolean inModal = (Boolean)request.getAttribute("inModal");
	String imgHeader = (String)request.getAttribute("imgHeader");
	String titleHeader = (String)request.getAttribute("titleHeader");	
	String btnVerificarLink = (String)request.getAttribute("btnVerificarLink");
	String btnVerificarText = (String)request.getAttribute("btnVerificarText");
	String lnkVerificarLink = (String)request.getAttribute("lnkVerificarLink");
	String lnkVerificarText = (String)request.getAttribute("lnkVerificarText");
	String[] txtRows = (String[])request.getAttribute("txtRows");
%>
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
	<p><%= new Date().toString() %></p>
</div>
<div class="m-bottom text-center">
	<p><img src="/bancaInternet/imagenes/clavesmart/<%=imgHeader%>"/></p>
	<p class="title-header"><%=titleHeader%></p>
</div>

<% for(String txtRow : txtRows){ %>
	<div class="m-bottom  cuerpo_justify">
		<%=txtRow %>
	</div>
<%} %>

<p class="m-bottom2">
	<button type="button"
		class="btn bkg-red acciones <%=inModal?"router":"router-servlet" %>"
		data-link="<%=btnVerificarLink%>"><%=btnVerificarText %></button>
</p>
<%if(lnkVerificarText != null){ %>
	<p class="m-bottom2">
		<a class="text-link footer-link router"
				href="<%=lnkVerificarLink%>"><%=lnkVerificarText %></a>
	</p>
<%} %>


