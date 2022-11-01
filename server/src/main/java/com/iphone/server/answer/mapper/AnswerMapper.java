package com.iphone.server.answer.mapper;


import com.iphone.server.answer.dto.AnswerLikeDto;
import com.iphone.server.answer.dto.AnswerPatchDto;
import com.iphone.server.answer.dto.AnswerPostDto;
import com.iphone.server.answer.dto.AnswerResponseDto;
import com.iphone.server.answer.entity.Answer;
import com.iphone.server.answer_like.entity.AnswerLike;
import com.iphone.server.question.dto.QuestionLikeDto;
import com.iphone.server.question.entity.Question;
import com.iphone.server.question.entity.QuestionLike;
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
    default AnswerLike answerPostLikeDtoToQuestionLike(Long id, AnswerLikeDto post){


        Answer answer = new Answer();
        answer.setAnswer_id(id);

        AnswerLike answerLike = AnswerLike.builder()
                .status(post.getStatus())
                .answer(answer)
                .build();

        return answerLike;
    }
}
