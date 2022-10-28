package com.iphone.server.answer.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
public class AnswerPatchDto {
    @Setter
    private Long answer_id;

    private String content;
}
