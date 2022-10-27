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
//        Answer answer = new Answer();

  //      answer.setContent(answerPostDto.getContent());

        Answer answer = Answer.builder()
                .content(answerPostDto.getContent())
                .build();

        return answer;

//        Question question = Question.builder()
//                .index(post.getIndex())
//                .content(post.getContent())
//                .build();
//        return question;
    }

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer){
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setAnswer_id(answer.getAnswer_id());
        answerResponseDto.setContent(answer.getContent());



        return answerResponseDto;
    }

    default Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto)
    {
        Answer answer = Answer.builder()
                .content(answerPatchDto.getContent())
                .build();

        return answer;
    }
}
