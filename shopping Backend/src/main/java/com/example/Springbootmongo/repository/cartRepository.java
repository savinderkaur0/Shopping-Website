package com.example.Springbootmongo.repository;
import com.example.Springbootmongo.model.Person;
import com.example.Springbootmongo.model.items;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.Springbootmongo.model.cart;
import java.util.*;
public interface cartRepository  extends MongoRepository<cart,String> {
    public cart findById(Integer id);

}
