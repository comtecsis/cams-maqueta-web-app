package hbbws.clavesmart.factory;

import javax.servlet.http.HttpServletRequest;

public class TemplateClaveSmartFactory
{
    public void configureTemplate200(HttpServletRequest request, boolean inModal, Object... params) {
        request.setAttribute("inModal", inModal);
        request.setAttribute("imgHeader", params[0]);
        request.setAttribute("titleHeader", params[1]);
        request.setAttribute("btnVerificarLink", params[2]);
        request.setAttribute("btnVerificarText", params[3]);
        request.setAttribute("lnkVerificarLink", params[4]);
        request.setAttribute("lnkVerificarText", params[5]);
        request.setAttribute("txtRows", params[6]);
    }
}
