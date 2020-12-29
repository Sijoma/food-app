package de.laer.zengerschu;

import io.micronaut.runtime.Micronaut;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@OpenAPIDefinition(
        info = @Info(
                title = "Food App",
                version = "0.1",
                description = "Food App APIs"
        )
)
@Configuration
@EnableTransactionManagement
public class Application {

    public static void main(String[] args) {
        Micronaut.run(Application.class, args);
    }
}
