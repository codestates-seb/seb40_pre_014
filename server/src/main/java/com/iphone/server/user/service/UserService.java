package com.iphone.server.user.service;

import com.iphone.server.user.config.jwt.JwtTokenUtil;
import com.iphone.server.user.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenUtil jwtTokenUtil;
    private static final String baseProfile="base-profile";

    public UserRegisterResponse UserRegister(UserRegisterRequest request){
        final String email=request.getEmail();
        final String password= request.getPassword();
        final String nickName=request.getNickName();

        User user=new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setNickName(nickName);
        user.setImg(baseProfile);
        user.setType(".jpg");
        userRepository.save(user);

        String token= jwtTokenUtil.generateToken(email);
        return new UserRegisterResponse(token);
    }

    public UserExistResponse emailDuplicateCheck(String email){
        boolean flag=userRepository.existsByEmail(email);
        return new UserExistResponse(flag);
    }

    public UserExistResponse nickDuplicateCheck(String nick){
        boolean flag=userRepository.existsByNickName(nick);
        return new UserExistResponse(flag);
    }

    public LoginResponse loginResponse(LoginRequest request){
        final String email= request.getEmail();
        final String password= request.getPassword();

        User user=userRepository.findByEmail(email).orElseThrow(()->new IllegalArgumentException("아이디 또는 비밀번호를 확인하세요."));
        if(!passwordEncoder.matches(password, user.getPassword())){
            throw new IllegalArgumentException("아이디 또는 비밀번호를 확인하세요.");
        }
        String token= jwtTokenUtil.generateToken(email);
        return new LoginResponse(token);
    }

    public ResponseEntity<?> logoutResponse(){
        String deleteToken="";
        HttpHeaders headers =new HttpHeaders();
        headers.set("Authorization",deleteToken);
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }
}
