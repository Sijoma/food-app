package de.laer.zengerschu.service;

import de.laer.zengerschu.entity.Recipe;
import de.laer.zengerschu.repository.RecipeRepository;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import org.springframework.web.bind.annotation.RequestParam;

import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Controller("/")
@Transactional
public class RecipeService {

    private RecipeRepository repository;

    @Inject
    public RecipeService(RecipeRepository repo){
        this.repository = repo;
    }

    @Get(value="recipe/{id}", produces = MediaType.APPLICATION_JSON )
    public Optional<Recipe> get(@PathVariable UUID id) {
        return repository.findById(id);
    }

    @Get(value="recipes",produces = MediaType.APPLICATION_JSON)
    public List<Recipe> getAll() {
        return repository.findAll();
    }

    @Put(value = "recipe", consumes = MediaType.APPLICATION_JSON)
    public void addRecipe(Recipe newRecipe){
        repository.save(newRecipe);
    }

}