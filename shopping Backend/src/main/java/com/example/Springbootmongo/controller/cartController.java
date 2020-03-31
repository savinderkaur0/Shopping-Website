package com.example.Springbootmongo.controller;

import com.example.Springbootmongo.model.Person;
import com.example.Springbootmongo.model.items;
import com.example.Springbootmongo.service.cartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.Springbootmongo.model.cart;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class cartController {
    @Autowired
    private  cartService  cartservice;
    @RequestMapping("/add")
    public String addToCart(@RequestParam Integer id, @RequestParam String name,   @RequestParam String details,@RequestParam String image, @RequestParam  String category, @RequestParam String subCategory) {
        cart p =cartservice.addToCart(id,name,details,image,category,subCategory);
        return p.toString();
    }
    @RequestMapping(method=RequestMethod.POST,value="/addToCart")
    public String create(@RequestBody cart cartt)
    {
        this.cartservice.create(cartt);
        return("Registered");
    }
    @RequestMapping("/getcartitems")
    public List getAllCartItems()
    {
        return cartservice.getAllCartItems();
    }

    @DeleteMapping("/rem/{id}")
    public void deleteItem(@PathVariable Integer id){
        cartservice.deleteItem(id);
//       return  "Deleted";
    }


    @RequestMapping (method=RequestMethod.DELETE,value="/clearcart")
    public String deleteAll()
    {
        cartservice.deleteAll();
        return "Cart Cleared!";
    }

}