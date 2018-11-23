package com.techprimers.stock.stockservice.resource;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.techprimers.stock.stockservice.model.Users;

@RestController
@RequestMapping("/rest/salary")
@CrossOrigin("*")
public class StockResource {

    @Autowired
    RestTemplate restTemplate;
    
    @GetMapping("/all")
    public List<Users> getUsers() throws JsonParseException, JsonMappingException, IOException {

        ResponseEntity<String> quoteResponse = restTemplate.exchange("http://db-service/rest/db/all" , HttpMethod.GET,
                null, new ParameterizedTypeReference<String>() {
                });

        ObjectMapper mapper = new ObjectMapper();
        List<Users> users = mapper.readValue(quoteResponse.getBody(), new TypeReference<List<Users>>(){});
        return users;
    }
    
    @GetMapping("/top")
    public Users getTop() throws JsonParseException, JsonMappingException, IOException {

        ResponseEntity<String> quoteResponse = restTemplate.exchange("http://db-service/rest/db/top" , HttpMethod.GET,
                null, new ParameterizedTypeReference<String>() {
                });

        ObjectMapper mapper = new ObjectMapper();
        Users user = mapper.readValue(quoteResponse.getBody(), Users.class);
        return user;
    }

}
