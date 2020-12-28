package de.laer.zengerschu.repository;

import de.laer.zengerschu.entity.Recipe;
import io.micronaut.data.annotation.Repository;
import io.micronaut.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
@Transactional
public interface RecipeRepository extends CrudRepository<Recipe, UUID> {

    List<Recipe> findAll();

    Optional<Recipe> findById(UUID id);

}
