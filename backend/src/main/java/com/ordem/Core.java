package com.ordem;

import com.ordem.services.JsonService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class Core {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(Core.class, args);
        JsonService jsonService = context.getBean(JsonService.class);

        jsonService.saveJsonData("test", 1);
        System.out.println("Başarılı");
    }
}