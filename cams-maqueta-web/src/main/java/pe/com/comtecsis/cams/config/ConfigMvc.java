package pe.com.comtecsis.cams.config;

import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.handler.SimpleMappingExceptionResolver;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import pe.com.comtecsis.crud.util.UtilWebConstants;

/**
 * Configuracion de thymeleaf.
 * 
 * @author Werner Oda
 *
 */
@Configuration
@EnableWebMvc
public class ConfigMvc extends WebMvcConfigurerAdapter
{

	@Bean
	public InternalResourceViewResolver templateResolver() {
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix(UtilWebConstants.PATH_TEMPLATES_THYMELEAF);
        resolver.setSuffix(UtilWebConstants.SUFFIX_HTML_JSP);
		return resolver;
	}
	
    /*@Bean
    public ITemplateResolver templateResolver()
    {
        SpringResourceTemplateResolver resolver = new SpringResourceTemplateResolver();
        resolver.setPrefix(UtilWebConstants.PATH_TEMPLATES_THYMELEAF);
        resolver.setSuffix(UtilWebConstants.SUFFIX_HTML_THYMELEAF);
        resolver.setTemplateMode(TemplateMode.HTML);
        resolver.setCacheable(true);                
        return resolver;
    }

    @Bean
    @Autowired
    public TemplateEngine templateEngine()
    {
        SpringTemplateEngine engine = new SpringTemplateEngine();
        engine.setTemplateResolver(templateResolver());
        engine.addDialect(new SpringSecurityDialect());
        return engine;
    }

    @Bean
    @Autowired
    public ThymeleafViewResolver thymeleafViewResolver(SpringTemplateEngine templateEngine)
    {
        ThymeleafViewResolver resolver = new ThymeleafViewResolver();
        resolver.setTemplateEngine(templateEngine);
        resolver.setCharacterEncoding(UtilWebConstants.ENCODING_UTF_8);
        resolver.setRedirectHttp10Compatible(false);
        return resolver;
    }

    @Bean
    public ViewResolver viewResolver()
    {
        ThymeleafViewResolver resolver = new ThymeleafViewResolver();
        resolver.setTemplateEngine(templateEngine());
        resolver.setCharacterEncoding(UtilWebConstants.ENCODING_UTF_8);
        resolver.setCache(true);
        resolver.setRedirectHttp10Compatible(false);
        return resolver;
    }*/

    
    @Bean
    public LocaleResolver localeResolver()
    {
        CookieLocaleResolver resolver = new CookieLocaleResolver();
        resolver.setDefaultLocale(Locale.forLanguageTag(UtilWebConstants.LOCALE_ES_PE));
        resolver.setCookieName(UtilWebConstants.COOKIE_TB_LOCALE);
        resolver.setCookieMaxAge(-1);
        resolver.setCookieHttpOnly(true);
        return resolver;
    }

    @Bean
    public LocaleChangeInterceptor localeChangeInterceptor()
    {
        LocaleChangeInterceptor lci = new LocaleChangeInterceptor();
        lci.setParamName(UtilWebConstants.PARAMETER_LOCALE);
        return lci;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry)
    {
        registry.addInterceptor(localeChangeInterceptor());
    }

    /*@Bean
    public MessageSource messageSource()
    {
	return new DatabaseMessageSource();
    }*/
    
    @Bean
    public ReloadableResourceBundleMessageSource messageSource()
    {
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasenames(new String[] { 
                "classpath:i18n/translate" });
        messageSource.setFallbackToSystemLocale(true);
        messageSource.setAlwaysUseMessageFormat(true);
        messageSource.setDefaultEncoding(UtilWebConstants.ENCODING_UTF_8);
        return messageSource;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry)
    {
        registry.addResourceHandler(UtilWebConstants.RESOURCES_LOCATION+"**").addResourceLocations(UtilWebConstants.RESOURCES_LOCATION);
    }
    
    
    @Bean
    public HandlerExceptionResolver theResolver(){
       SimpleMappingExceptionResolver s = new SimpleMappingExceptionResolver();
       s.setDefaultErrorView("error/error_template");
       return s;
    }
    
    @Override
    public void addFormatters(FormatterRegistry registry) {
    }
    
    
}