package com.iphone.server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {

    private Long answer_id;
    private String content;
   // private LocalDateTime created_at;
    //private LocalDateTime modified_at;

}
