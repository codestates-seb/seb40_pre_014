package com.iphone.server.user.service;

import com.iphone.server.user.config.jwt.JwtTokenUtil;
import com.iphone.server.user.domain.UserRepository;
import com.iphone.server.user.dto.*;
import com.iphone.server.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    private static final String baseProfile = "base-profile";

    public UserRegisterResponse UserRegister(UserRegisterRequest request) {
        final String email = request.getEmail();
        final String password = request.getPassword();
        final String nickName = request.getNickName();

        User user = new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setNickName(nickName);
        user.setImg(baseProfile);
        user.setType(".jpg");
        userRepository.save(user);

        String token = jwtTokenUtil.generateToken(email);
        return new UserRegisterResponse(token);
    }

    public UserExistResponse emailDuplicateCheck(String email) {
        boolean flag = userRepository.existsByEmail(email);
        return new UserExistResponse(flag);
    }

    public UserExistResponse nickDuplicateCheck(String nick) {
        boolean flag = userRepository.existsByNickName(nick);
        return new UserExistResponse(flag);
    }

    public LoginResponse loginResponse(LoginRequest request) {
        final String email = request.getEmail();
        final String password = request.getPassword();

        User user = userRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("????????? ?????? ??????????????? ???????????????."));
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new IllegalArgumentException("????????? ?????? ??????????????? ???????????????.");
        }
        Long id = user.getNumber();
        String token = jwtTokenUtil.generateToken(email);
        return new LoginResponse(id, token);
    }

    public ResponseEntity<?> logoutResponse() {
        String deleteToken = "";
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", deleteToken);
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }

    public Page<UserInfoResponse> getUsers(Pageable pageable) {
        return userRepository.findAll(pageable).map(UserInfoResponse::from);
    }

    public Page<UserInfoResponse> getUsersByNickname(Pageable pageable, String nickname) {
        return userRepository.findAllByNickName(nickname, pageable).map(UserInfoResponse::from);
    }

    public UserTokenDetailResponse getUserInfoFromToken(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("????????? ????????? ??????????????? ????????? ?????????????????????."));
        return UserTokenDetailResponse.from(user);
    }
}