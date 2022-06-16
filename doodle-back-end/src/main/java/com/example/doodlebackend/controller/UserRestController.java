package com.example.doodlebackend.controller;

import com.example.doodlebackend.entity.LoginUserInfo;
import com.example.doodlebackend.entity.NewUserInfo;
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
    public ResponseEntity<String> saveUser(@RequestBody NewUserInfo newUserInfo) throws ExecutionException, InterruptedException {
        if(userService.checkUserExists(newUserInfo.getEmail())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(userService.saveUser(newUserInfo), HttpStatus.OK);
    }

    @PostMapping("/login")
    @CrossOrigin
    public ResponseEntity<String> login(@RequestBody LoginUserInfo loginUserInfo) throws ExecutionException, InterruptedException {
        if(!userService.checkUserExists(loginUserInfo.getEmail())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(userService.login(loginUserInfo), HttpStatus.OK);
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
