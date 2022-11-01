package com.iphone.server.question.mapper;

import com.iphone.server.question.dto.TagsResponseDto;
import com.iphone.server.question.entity.Tags;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagsMapper {

    List<TagsResponseDto> tagsToTagsResponseDto(List<Tags> tags);
}
