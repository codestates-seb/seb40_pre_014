package com.iphone.server.user.dto;

import com.iphone.server.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserTokenDetailResponse {
    private Long id;
    private String email;
    private String nickname;

    public static UserTokenDetailResponse from(User user) {
        return new UserTokenDetailResponse(user.getNumber(), user.getEmail(), user.getNickName());
    }
}
