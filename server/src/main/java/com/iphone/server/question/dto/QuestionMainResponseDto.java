package com.iphone.server.question.dto;

import com.iphone.server.question.entity.TagList;
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
public class QuestionMainResponseDto {

    private long questionId;

    private String title;

    private Integer voteCount;

    private Integer answerCount;

    private Integer viewCount;

    private String content;

    private LocalDateTime regDate;

    private LocalDateTime modDate;

    private String  nickName;

    private List<TagList> tagLists;
}
