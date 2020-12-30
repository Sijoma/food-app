package de.laer.zengerschu.repository;

import de.laer.zengerschu.entity.Recipe;
import de.laer.zengerschu.entity.Tag;
import io.micronaut.data.annotation.Repository;
import io.micronaut.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface TagRepository extends CrudRepository<Tag, Integer>  {

    List<Tag> findAll();

    Optional<Tag> findById(Integer id);
}
