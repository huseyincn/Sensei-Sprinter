package com.flyntra.senseisprintter.controller;

import com.flyntra.senseisprintter.data.entity.User;
import com.flyntra.senseisprintter.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import com.flyntra.senseisprintter.service.UserDetailService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class LoginRegisterController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserDetailService userDetailsService;
    @PostMapping("/login")
    public ResponseEntity<String> authenticateUser(@RequestParam(value = "username") String username, @RequestParam(value = "password") String password) {
        try {
        Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));

        SecurityContextHolder.getContext().setAuthentication(auth);

        // generate JWT token



        return ResponseEntity.ok("Login successfully"); }
        catch (Exception e) {
            return ResponseEntity.status(401).body("Couldn't login");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestParam(value = "username") String username, @RequestParam(value = "email") String email, @RequestParam(value = "password") String password) {
        if (userRepository.existsByUserName(username))
            return new ResponseEntity<>("Username already exist on db", HttpStatus.BAD_REQUEST);

        if(userRepository.existsByEmail(email)){
            return new ResponseEntity<>("Email is already exist!", HttpStatus.BAD_REQUEST);
        }

        userRepository.save(new User(username,email,passwordEncoder.encode(password)));
        return ResponseEntity.ok("Registration is successful");
    }
}
