package com.sell.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @RequestMapping("tt")
    public String test(){
        return "hello springboot";
    }
}
