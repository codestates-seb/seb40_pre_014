package com.iphone.server.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserInfoResponse {
    private Long number;
    private String nickName;
    private String img;

    public static UserInfoResponse from(User user) {
        return new UserInfoResponse(user.getNumber(),user.getNickName(),user.getImg());
    }
}
