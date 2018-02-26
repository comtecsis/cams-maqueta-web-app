package hbbws.clavesmart.thread;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

public class PrintTask implements Runnable{

	String prefix;
	String name;
	Integer value;
	HttpServletRequest request;

	public PrintTask(HttpServletRequest request, String prefix, String name, Integer value){
		this.name = name;
		this.value = value;
		this.prefix = prefix;
		this.request = request;
	}

	@Override
	public void run() {
		
		
		Date date_ini = new Date(System.currentTimeMillis());

		try {
			Thread.sleep(value);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		Date date_end = new Date(System.currentTimeMillis());
		request.setAttribute(name, toString()+" | "+date_ini+" | "+date_end);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getValue() {
		return value;
	}

	public void setValue(Integer value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "PrintTask [name=" + prefix+name + ", value=" + value + "]";
	}
	
	

}
