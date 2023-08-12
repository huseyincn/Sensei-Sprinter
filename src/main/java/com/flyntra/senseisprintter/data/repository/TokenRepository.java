package com.flyntra.senseisprintter.data.repository;

import com.flyntra.senseisprintter.data.entity.AccessToken;
import org.springframework.data.repository.CrudRepository;

public interface TokenRepository extends CrudRepository<AccessToken,Long> {

    AccessToken findByUser(Long id);

}
