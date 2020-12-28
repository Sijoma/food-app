package de.laer.zengerschu;

import io.micronaut.context.annotation.ConfigurationProperties;
import io.micronaut.runtime.Micronaut;

public class Application {

    public static void main(String[] args) {
        Micronaut.run(Application.class, args);
    }
}
