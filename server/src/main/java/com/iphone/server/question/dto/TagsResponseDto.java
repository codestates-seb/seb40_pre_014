package com.iphone.server.question.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TagsResponseDto {
    private Long tagId;

    private String tagName;

    private String content;
}
