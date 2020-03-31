package com.example.Springbootmongo.repository;

import com.example.Springbootmongo.model.Person;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends MongoRepository<Person, String> {
    public Person findByFirstName(String userName);
    public List<Person> findByPassword(String password);

}
