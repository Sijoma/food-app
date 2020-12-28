package de.laer.zengerschu.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class Recipe {

    @Id
    @org.hibernate.annotations.Type(type="pg-uuid")
    private UUID id;
    private String name;
    private String description;

    public Recipe(){
        this.id = UUID.randomUUID();
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
