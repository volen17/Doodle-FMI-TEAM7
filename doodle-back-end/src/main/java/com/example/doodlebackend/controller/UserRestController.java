package com.example.doodlebackend.controller;

import com.example.doodlebackend.entity.User;
import com.example.doodlebackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/users")
public class UserRestController {

    @Autowired
    private UserService userService;

    @PostMapping()
    @CrossOrigin
    public ResponseEntity<User> saveUser(@RequestBody User user) throws ExecutionException, InterruptedException {
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @GetMapping("/{email}")
    @CrossOrigin
    public ResponseEntity<User> getUser(@PathVariable String email) throws ExecutionException, InterruptedException {
        return new ResponseEntity<>(userService.getUser(email), HttpStatus.OK);
    }

    @GetMapping()
    @CrossOrigin
    public ResponseEntity<List<User>> getAllUsers() throws ExecutionException, InterruptedException {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }
}
