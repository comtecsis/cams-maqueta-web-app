<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
	
<%
	String nroCelular = request.getParameter("nroCelular");
	String email = request.getParameter("email");
%>

<h1>Enviar la ClaveSmart v�a</h1>
<div id="layerResendToken">
	<div>
		<div>
			<input type="radio" name="opt-rsnd-tok" id="optSms" value="SMS" />
		</div>
		<div>
			<label for="optSms">SMS</label>
			<span>Se enviar� al <%=nroCelular %></span>
		</div>
	</div>
	<div>
		<div>
		<input type="radio" name="opt-rsnd-tok" id="optEmail" value="EMAIL" />
		</div>
		<div>
			<label for="optEmail">Email</label>
			<span>Se enviar� a <%=email %></span>
		</div>
	</div>
	<div>
		<input type="button" value="Cancelar" class="btn acciones bkg-white close-resend-token"/>
		<input type="button" value="Enviar" class="acciones bkg-red send-resend-token"/>
	</div>
</div>