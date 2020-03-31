package com.example.Springbootmongo.service;

import com.example.Springbootmongo.model.Person;
import java.util.List;

import com.example.Springbootmongo.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    //CreateOperation
    public Person create(String firstName, String lastName,String email,String password) {
        return personRepository.save(new Person(firstName, lastName,email,password));
    }

    //RetrieveOperation
    public List<Person> getAll() {
        return personRepository.findAll();
    }

    public Person findByFirstName(String firstName)
    {
        return personRepository.findByFirstName(firstName);
    }

    //UpdateOperation
    public Person update(String firstName,String lastName,String email,String password) {
        Person p = personRepository.findByFirstName(firstName);
        p.setFirstName(firstName);
        p.setPassword(password);
        return personRepository.save(p);
    }

    //DeleteOperation
    public void deleteAll() {
        personRepository.deleteAll();
    }

    public void delete(String firstName) {
        Person p = personRepository.findByFirstName(firstName);
        personRepository.delete(p);
    }


    public String create(Person person) {

        personRepository.save(person);
        return("Registered");
    }
}
