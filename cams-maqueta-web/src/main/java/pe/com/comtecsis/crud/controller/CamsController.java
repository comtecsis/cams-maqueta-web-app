package pe.com.comtecsis.crud.controller;

import java.io.IOException;
import java.text.MessageFormat;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import hbbws.clavesmart.factory.TemplateClaveSmartFactory;
import hbbws.clavesmart.thread.PrintTask;

@Controller
public class CamsController {
	
	private static final Logger logger = LoggerFactory.getLogger(CamsController.class);
	
	private static final String BASE_ADIOS_TOKEN = "clavesmart/";
	
	private static final String TITLE_MODULE = "Clave Smart";
    
    private static final String TEMPLATE_STEP_DEFAULT = BASE_ADIOS_TOKEN + "baseModal";
    private static final String TEMPLATE_STEP_1 = BASE_ADIOS_TOKEN + "AdiosToken200";
    private static final String TEMPLATE_STEP_2 = BASE_ADIOS_TOKEN + "AdiosToken700";
    private static final String TEMPLATE_STEP_3 = BASE_ADIOS_TOKEN + "AdiosToken600";
    private static final String TEMPLATE_STEP_4 = BASE_ADIOS_TOKEN + "AdiosToken500";
    private static final String TEMPLATE_STEP_5 = BASE_ADIOS_TOKEN + "AdiosToken500";
    private static final String TEMPLATE_STEP_6 = BASE_ADIOS_TOKEN + "AdiosToken300";
    private static final String TEMPLATE_STEP_7 = BASE_ADIOS_TOKEN + "AdiosToken200";
    private static final String TEMPLATE_STEP_8 = BASE_ADIOS_TOKEN + "AdiosToken700";
    private static final String TEMPLATE_STEP_9 = BASE_ADIOS_TOKEN + "AdiosToken700";
    
    @Autowired
    public ThreadPoolTaskExecutor taskExecutor;
    
    @RequestMapping("ClaveSmart")
    public String ClaveSmart(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    		
	  		// Template a utilizar
		    String step = request.getParameter("step");
		    return routerStep(step, request, response);
		    
    }
	
	private void configureRequestParams(HttpServletRequest request) {
	    request.setAttribute("TITLE_MODULE", TITLE_MODULE);
	}
	
	private void executeThreads(String step, HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{
		String prefix = MessageFormat.format("{0} ->", step);
		int count = 5;
		while(--count >= 0) {
			Integer number = (int)(Math.random() * 10000);
			PrintTask task = new PrintTask(request, prefix, "thread-"+count, number);
			logger.info(task.toString());
			taskExecutor.execute(task);
		}
		//check active thread, if zero then shut down the thread pool
		for (;;) {
			count = taskExecutor.getActiveCount();
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			if (count == 0) {
				//taskExecutor.shutdown();
				break;
			}
		}
	}
	
    private String routerStep(String step, HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
    	String template = null;
        configureRequestParams(request);
        executeThreads(step, request, response);
        if ("1".equals(step))
        {
        	template = step1(request, response);
        }
        else if ("2".equals(step))
        {
        	template = step2(request, response);
        }
        else if ("3".equals(step))
        {
        	template = step3(request, response);
        }
        else if ("4".equals(step))
        {
        	template = step4(request, response);
        }
        else if ("5".equals(step))
        {
        	template = step5(request, response);
        }
        else if ("6".equals(step))
        {
        	template = step6(request, response);
        }
        else if ("7".equals(step))
        {
        	template = step7(request, response);
        }
        else
        {
        	template = stepDefault(request, response);
        }
        return template;
    }


    private String suministrarPagina(HttpServletRequest request, HttpServletResponse response,
			String template) {
		return template;
	}
    
    private String convertTitleLink() {
        return TITLE_MODULE.replace(" ", "");
    }
    
    private void cofigureRequestDefault(HttpServletRequest request) {
        new TemplateClaveSmartFactory().configureTemplate200(request, true, "ClaveSmart.png", convertTitleLink()+"&#x2122;", "ClaveSmart?step=2", "Verificar",
                "ClaveSmart?step=1", "Verificar luego",
                new String[] { convertTitleLink()+"&#x2122; reemplazar� tu dispositivo token para "
                        + "que puedas realizar operaciones por la web y el app "
                        + "de forma segura rapida y practica." });
    }
    
    private String stepDefault(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        cofigureRequestDefault(request);
        return suministrarPagina(request, response, TEMPLATE_STEP_DEFAULT);
    }

	private String step1(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        cofigureRequestDefault(request);
        return suministrarPagina(request, response, TEMPLATE_STEP_1);
    }

    private String step2(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
    	return suministrarPagina(request, response, TEMPLATE_STEP_2);
    }

    private String step3(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
    	return suministrarPagina(request, response, TEMPLATE_STEP_3);
    }

    private String step4(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
    	return suministrarPagina(request, response, TEMPLATE_STEP_4);
    }

    private String step5(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
    	return suministrarPagina(request, response, TEMPLATE_STEP_5);
    }

    private String step6(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
    	return suministrarPagina(request, response, TEMPLATE_STEP_6);
    }

    private String step7(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        new TemplateClaveSmartFactory().configureTemplate200(request, false, "Confeti.png", "!Listo, chau Token",
                "MuestraCartera", "Ir al menu principal", null, null,
                new String[] {
                        "De ahora en adelante usar&aacute;s tu "+convertTitleLink()+"&#x2122; para realizar operaciones "
                        + "por la web o el app. La recibir�s v�a SMS a cada vez que hagas una operaci&oacute;n.",
                        "Si deseas editar estos datos, ingresa a nuestra web o visita una agencia" });
        return suministrarPagina(request, response, TEMPLATE_STEP_7);
    }

    private String step8(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        return suministrarPagina(request, response, TEMPLATE_STEP_8);
    }

    private String step9(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
    	return suministrarPagina(request, response, TEMPLATE_STEP_9);
    }
}
