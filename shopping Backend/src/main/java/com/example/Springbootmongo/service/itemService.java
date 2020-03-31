package com.example.Springbootmongo.service;

import com.example.Springbootmongo.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Springbootmongo.model.items;
import com.example.Springbootmongo.repository.itemRepository;

import java.util.List;

@Service
public class itemService {
    @Autowired
    private itemRepository itemrepository;
    public items  store(Integer id,String name,Double price,String details,String image,String category,String subCategory)
    {
        return itemrepository.save(new items(id,name,price,details,image,category,subCategory));
    }
    public List<items> getAllItemss()
    {
        return itemrepository.findAll();
    }
    public void deleteAll()
    {

        itemrepository.deleteAll();
    }
    public void  deletee(String subCategory) {
        items p = itemrepository.findBySubCategory(subCategory);
        itemrepository.delete(p);
    }
    public List<items> getByCategory(String category)
    {
        return itemrepository.findAllByCategory(category);
    }
    public List<items> getBySubCategory(String subCategory)
    {
        return itemrepository.findAllBySubCategory(subCategory);
    }
    
}
