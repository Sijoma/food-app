package de.laer.zengerschu.service;

import de.laer.zengerschu.entity.Recipe;
import de.laer.zengerschu.repository.RecipeRepository;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;

import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Controller("/recipe")
@Transactional
public class RecipeService {

    private RecipeRepository repository;

    @Inject
    public RecipeService(RecipeRepository repo){
        this.repository = repo;
    }

    @Get(produces = MediaType.APPLICATION_JSON)
    public Optional<Recipe> get(UUID id) {
        return repository.findById(id);
    }

    @Get(value = "getAll", produces = MediaType.APPLICATION_JSON)
    public List<Recipe> getAll() {
        return repository.findAll();
    }

}