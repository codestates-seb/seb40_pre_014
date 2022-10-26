package com.iphone.server.user.controller;

import com.iphone.server.user.dto.UserRegisterRequest;
import com.iphone.server.user.dto.UserRegisterResponse;
import com.iphone.server.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;
    @PostMapping("/register")
    public UserRegisterResponse registerUser(@RequestBody UserRegisterRequest userRegisterRequest){
        return userService.UserRegister(userRegisterRequest);
    }
}
