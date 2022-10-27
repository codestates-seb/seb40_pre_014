package com.iphone.server.user.controller;

import com.iphone.server.user.dto.*;
import com.iphone.server.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    @PostMapping
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

    @PostMapping("/authentication")
    public LoginResponse login(@RequestBody LoginRequest loginRequest){
        return userService.loginResponse(loginRequest);
    }

    @DeleteMapping("/authentication")
    public ResponseEntity<?> logout(){
        return userService.logoutResponse();
    }

    @GetMapping
    public Page<UserInfoResponse> getAllUsers(Pageable pageable){
        return userService.getUsers(pageable);
    }

    @GetMapping("/nickname/{nickname}")
    public Page<UserInfoResponse> getAllUsersByNickname(Pageable pageable,@PathVariable String nickname){
        return userService.getUsersByNickname(pageable,nickname);
    }
}
