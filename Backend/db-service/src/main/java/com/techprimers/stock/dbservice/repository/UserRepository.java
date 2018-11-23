package com.techprimers.stock.dbservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.techprimers.stock.dbservice.document.Users;

public interface UserRepository extends MongoRepository<Users, Integer> {
		Users findFirstByOrderBySalaryDesc();
}
