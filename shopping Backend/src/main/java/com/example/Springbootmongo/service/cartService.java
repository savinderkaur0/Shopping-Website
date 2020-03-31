package com.example.Springbootmongo.service;
import com.example.Springbootmongo.model.Person;
import com.example.Springbootmongo.model.items;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Springbootmongo.model.cart;
import com.example.Springbootmongo.repository.cartRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.security.Principal;
import java.util.List;
@Service
public class cartService {
    @Autowired
    private cartRepository cartrepository;
    public cart addToCart(Integer id,String name, String details, String image, String category, String subCategory)
    {
        return cartrepository.save(new cart(id,name,details,image,category,subCategory));
    }
    public List<cart> getAllCartItems()
    {
        return cartrepository.findAll();
    }
    public void deleteAll()
    {

        cartrepository.deleteAll();
    }
    public String create(cart cartt) {

       cartrepository.save(cartt);
        return("Registered");
    }
    public void deleteItem(Integer id) {
       cart c =cartrepository.findById(id);

       cartrepository.delete(c);
    }


}
