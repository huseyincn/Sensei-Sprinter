package com.flyntra.senseisprintter.service;

import com.flyntra.senseisprintter.data.entity.User;
import com.flyntra.senseisprintter.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserDetailService implements UserDetailsService {

    @Autowired
    UserRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findUserByUserName(username);
        if(user==null)
            throw new UsernameNotFoundException("User not exist on db: "+username);
        ArrayList<GrantedAuthority> roleList = new ArrayList<>(List.of(new SimpleGrantedAuthority("User")));
        return new org.springframework.security.core.userdetails.User(username, user.getPassword(), roleList );
    }
}
