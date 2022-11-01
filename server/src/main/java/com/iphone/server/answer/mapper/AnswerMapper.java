package com.iphone.server.answer.mapper;


import com.iphone.server.answer.dto.AnswerPatchDto;
import com.iphone.server.answer.dto.AnswerPostDto;
import com.iphone.server.answer.dto.AnswerResponseDto;
import com.iphone.server.answer.entity.Answer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto)
    {
       Answer answer = new Answer();

    answer.setContent(answerPostDto.getContent());


        return answer;


    }

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer){
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setAnswer_id(answer.getAnswer_id());
        answerResponseDto.setContent(answer.getContent());



        return answerResponseDto;
    }

    default Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto)
    {


        Answer answer = new Answer();
        answer.setContent(answerPatchDto.getContent());

        return answer;
    }
}
