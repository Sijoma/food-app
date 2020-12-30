package de.laer.zengerschu.service;

import de.laer.zengerschu.entity.Recipe;
import de.laer.zengerschu.entity.Tag;
import de.laer.zengerschu.repository.RecipeRepository;
import de.laer.zengerschu.repository.TagRepository;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.PathVariable;
import io.micronaut.http.annotation.Put;

import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Controller("/")
@Transactional
public class TagService {

        private TagRepository repository;

        @Inject
        public TagService(TagRepository repo){
            this.repository = repo;
        }

        @Get(value="tag/{id}", produces = MediaType.APPLICATION_JSON )
        public Optional<Tag> get(@PathVariable Integer id) {
            return repository.findById(id);
        }

        @Get(value="tags",produces = MediaType.APPLICATION_JSON)
        public List<Tag> getAll() {
            return repository.findAll();
        }

        @Put(value = "tag", consumes = MediaType.APPLICATION_JSON)
        public void addTag(Tag newTag){
            repository.save(newTag);
        }

    }
