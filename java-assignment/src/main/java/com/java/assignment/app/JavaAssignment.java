package com.java.assignment.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.java.assignment.app")
public class JavaAssignment {

	public static void main(String[] args) {
		SpringApplication.run(JavaAssignment.class, args);
	}

}
