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
import com.iphone.server.user.domain.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto)
    {

        Question question = new Question();
        question.setQuestionId(answerPostDto.getQuestionId());

        User user = new User();
        user.setNumber(answerPostDto.getUserId());


       Answer answer = new Answer();
        answer.setContent(answerPostDto.getContent());
        answer.setQuestion(question);
        answer.setUser(user);

        return answer;



    }

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer){
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setAnswer_id(answer.getAnswer_id());
        answerResponseDto.setContent(answer.getContent());
        answerResponseDto.setUserId(answer.getUser().getNumber());
        answerResponseDto.setQuestionId(answer.getQuestion().getQuestionId());



        return answerResponseDto;
    }

    default Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto)
    {


        Answer answer = new Answer();
        answer.setAnswer_id(answerPatchDto.getAnswer_id());
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
