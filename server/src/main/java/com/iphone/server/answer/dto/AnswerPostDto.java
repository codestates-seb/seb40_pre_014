package com.iphone.server.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotEmpty;

@Getter
public class AnswerPostDto {

    @NotEmpty(message = "내용을 입력해주세요")
    private String content;

    private long questionId;

    private long userId;

}
