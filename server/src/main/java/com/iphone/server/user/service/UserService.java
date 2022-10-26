package com.iphone.server.user.service;

import com.iphone.server.user.config.jwt.JwtTokenUtil;
import com.iphone.server.user.dto.User;
import com.iphone.server.user.dto.UserRegisterRequest;
import com.iphone.server.user.dto.UserRegisterResponse;
import com.iphone.server.user.dto.UserRepository;
import lombok.RequiredArgsConstructor;
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
}
