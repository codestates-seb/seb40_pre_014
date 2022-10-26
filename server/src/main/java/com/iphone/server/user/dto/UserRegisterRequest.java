package com.iphone.server.user.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegisterRequest {
    private String email;
    private String password;
    private String nickName;
}
