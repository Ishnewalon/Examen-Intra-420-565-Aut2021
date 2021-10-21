package com.examenintra.controller;

import com.examenintra.model.User;
import com.examenintra.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/createUser")
    public ResponseEntity<?> logAttempt(@RequestBody User user) {
        User createdUser;
        try {
            createdUser = userService.create(user);
        } catch (IllegalArgumentException e) {
            return ResponseEntity
                    .badRequest()
                    .body(user);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    @GetMapping("/allTries")
    public ResponseEntity<?> getAllTries() {
        List<User> userList = userService.getAll();
        return ResponseEntity.ok(userList);
    }
}
