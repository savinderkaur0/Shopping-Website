package com.example.Springbootmongo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class cart {
    @Id
    private Integer id;
    private String name;
    private Double price;
    private String details;
    private String image;
    private String category;
    private String subCategory;

    public cart( Integer id,String name, String details, String image, String category, String subCategory) {

        this.name = name;
this.id=id;
        this.details = details;
        this.image = image;
        this.category = category;
        this.subCategory = subCategory;
    }





    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "cart{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", details='" + details + '\'' +
                ", image='" + image + '\'' +
                ", category='" + category + '\'' +
                ", subCategory='" + subCategory + '\'' +
                '}';
    }
}
