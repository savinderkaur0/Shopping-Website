package com.example.Springbootmongo.controller;
import com.example.Springbootmongo.model.Person;
import com.example.Springbootmongo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
public class PersonController {

    @Autowired
    private PersonService personService;
      @RequestMapping("/create")
    public String create(@RequestParam String firstName,@RequestParam String lastName,@RequestParam String email, @RequestParam String password) {
        Person p = personService.create(firstName,lastName,email,password);
        return p.toString();
    }
    @RequestMapping(method=RequestMethod.POST,value="/create")
    public String create(@RequestBody Person person)
    {
        this.personService.create(person);
        return("Registered");
    }
    @RequestMapping("/get")
    public Person getPerson(@RequestParam String firstName)
    {
       return personService.findByFirstName(firstName);
    }
    @RequestMapping("/getAll")
    public List<Person> getAllPerson() {
        return personService.getAll();
    }

    @RequestMapping("/update")
    public String update(@RequestParam String firstName,@RequestParam String lastName,@RequestParam String email,@RequestParam String password) {
        Person p = personService.update(firstName,lastName,email,password);
        return p.toString();
    }

    @RequestMapping("/delete")
    public String delete(@RequestParam String firstName) {
       personService.delete(firstName);
        return "Deleted " + firstName;
    }

    @RequestMapping("/deleteAll")
    public String deleteAll() {
        personService.deleteAll();
        return "Deleted All Records!";
    }
}
