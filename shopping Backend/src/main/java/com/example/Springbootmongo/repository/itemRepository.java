package com.example.Springbootmongo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.Springbootmongo.model.items;
import org.springframework.stereotype.Repository;
import java.util.*;
@Repository
public interface itemRepository extends MongoRepository<items,String> {
     public items findBySubCategory(String subCategory);
     List<items> findAllByCategory(String category);
     List<items> findAllBySubCategory(String subCategory);
}
