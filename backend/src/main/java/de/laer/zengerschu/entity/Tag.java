package de.laer.zengerschu.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;
import java.util.UUID;

@Entity
public class Tag {

    @Id
    private Integer id;
    private String title;
    private String description;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @ManyToMany(mappedBy = "tags", fetch = FetchType.EAGER)
    private Collection<Recipe> recipes;

    @JsonIgnoreProperties("tags")
    public Collection<Recipe> getRecipes() {
        return recipes;
    }
    public void setRecipes(Collection<Recipe> recipes) {
        this.recipes = recipes;
    }


}
