package com.iphone.server.user.controller;

import com.iphone.server.user.dto.UserExistResponse;
import com.iphone.server.user.dto.UserRegisterRequest;
import com.iphone.server.user.dto.UserRegisterResponse;
import com.iphone.server.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;
    @PostMapping("/register")
    public UserRegisterResponse registerUser(@RequestBody UserRegisterRequest userRegisterRequest){
        return userService.UserRegister(userRegisterRequest);
    }

    @GetMapping("/auth/email/{email}")
    public UserExistResponse duplicateCheckEmail(@PathVariable(value="email") String email){
        return userService.emailDuplicateCheck(email);
    }

    @GetMapping("/auth/nick/{nick}")
    public UserExistResponse duplicateCheckNickName(@PathVariable(value = "nick") String nick){
        return userService.nickDuplicateCheck(nick);
    }

}
