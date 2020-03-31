package com.example.Springbootmongo.controller;
import com.example.Springbootmongo.model.Person;
import com.example.Springbootmongo.model.items;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.Springbootmongo.service.itemService;
import java.util.List;


@CrossOrigin(origins = "*")
@RestController
public class itemController {
    @Autowired
    private itemService itemservice;
    @RequestMapping("/store")
    public String store(@RequestParam Integer id,@RequestParam String name, @RequestParam Double price, @RequestParam String details, @RequestParam String image,@RequestParam  String category,@RequestParam String subCategory) {
        items p =itemservice.store(id,name,price,details,image,category,subCategory);
        return p.toString();
    }
  @RequestMapping("/getitems")
    public List getAllItems()
  {
        return itemservice.getAllItemss();
    }
    @RequestMapping("/deleteAllItems")
    public String deleteAll()
    {
        itemservice.deleteAll();
        return "Deleted All Records!";
    }
    @RequestMapping(value= "/get/{category}", method= RequestMethod.GET)
    public List<items> getByCategory(@PathVariable String category)
    {
        return itemservice.getByCategory(category);
    }
    @RequestMapping(value="/deleteByCategory/{subCategory}",method=RequestMethod.DELETE)
    public String delete(@RequestParam String subCategory) {
        itemservice.deletee(subCategory);
        return "Deleted " + subCategory;
    }
    @RequestMapping(value= "/getBy/{subCategory}", method= RequestMethod.GET)
    public List<items> getBySubCategory(@PathVariable String subCategory)
    {
        return itemservice.getBySubCategory(subCategory);
    }
}
