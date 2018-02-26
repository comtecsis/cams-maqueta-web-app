package pe.com.comtecsis.cams.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

@Configuration
@PropertySource(value = {"classpath:db.properties", "classpath:app.properties"}, ignoreResourceNotFound = false)
@ComponentScan("pe.com.comtecsis.crud")
public class RootConfig {
    
	@Bean
	@Scope("prototype")
	public ThreadPoolTaskExecutor threadPoolTaskExecutor() {
		ThreadPoolTaskExecutor threadPoolTaskExecutor = new ThreadPoolTaskExecutor();
		threadPoolTaskExecutor.setCorePoolSize(10);
		threadPoolTaskExecutor.setMaxPoolSize(25);
		threadPoolTaskExecutor.setQueueCapacity(30);
		return threadPoolTaskExecutor;
	}
	
}
