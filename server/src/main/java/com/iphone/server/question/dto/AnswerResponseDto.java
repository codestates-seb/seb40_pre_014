package com.iphone.server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnswerResponseDto {
    private Long answerId;

    private String content;

    private LocalDateTime regDate;

    private String  nickName;

    private Integer viewCount;

    private Integer voteCount;

}
