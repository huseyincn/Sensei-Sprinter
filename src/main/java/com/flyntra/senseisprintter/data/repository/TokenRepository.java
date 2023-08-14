package com.flyntra.senseisprintter.data.repository;

import com.flyntra.senseisprintter.data.entity.AccessToken;
import com.flyntra.senseisprintter.data.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface TokenRepository extends CrudRepository<AccessToken,Long> {

    AccessToken findByUserid(User uid);

}
