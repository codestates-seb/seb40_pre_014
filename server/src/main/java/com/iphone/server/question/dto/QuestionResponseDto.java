package com.iphone.server.question.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class QuestionResponseDto {
    private Long questionId;

    private String title;

    private String content;

    private List<String> questionTags;

}
