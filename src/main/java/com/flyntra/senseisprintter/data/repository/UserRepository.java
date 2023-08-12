package com.flyntra.senseisprintter.data.repository;

import com.flyntra.senseisprintter.data.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {

    User findUserByUserName(String username);

}
