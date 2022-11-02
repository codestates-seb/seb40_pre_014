package com.iphone.server.question.dto;

import com.iphone.server.question.entity.TagList;
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


   // private List<TagList> tagLists;
}
