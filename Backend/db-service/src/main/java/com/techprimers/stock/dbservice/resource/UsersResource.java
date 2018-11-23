package com.techprimers.stock.dbservice.resource;

import com.techprimers.stock.dbservice.document.Users;
import com.techprimers.stock.dbservice.repository.UserRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/db")
public class UsersResource {

    private UserRepository userRepository;

    public UsersResource(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/all")
    public List<Users> getAll() {
        return userRepository.findAll();
    }
    
    @GetMapping("/top")
    public Users getTop() {
        return userRepository.findFirstByOrderBySalaryDesc();
    }
}
