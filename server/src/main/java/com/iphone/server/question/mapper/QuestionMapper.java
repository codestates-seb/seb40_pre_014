package com.iphone.server.question.mapper;

import com.iphone.server.answer.entity.Answer;
import com.iphone.server.question.dto.*;
import com.iphone.server.question.entity.Question;
import com.iphone.server.question.entity.QuestionLike;

import com.iphone.server.user.domain.User;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {



    default Question questionPostDtoToQuestion(Long id, QuestionPostDto post){

        User user = new User();
        user.setNumber(id);

        Question question = Question.builder()
                .title(post.getTitle())
                .content(post.getContent())
                .voteCount(0)
                .viewCount(0)
                .user(user)
                .build();
        return question;
    }


    default QuestionDetailResponseDto QuestionToQuestionDetailResponseDto(Question question){
        QuestionDetailResponseDto qDetailDto = new QuestionDetailResponseDto();
        qDetailDto.setQuestionId(question.getQuestionId());
        qDetailDto.setTitle(question.getTitle());
        qDetailDto.setVoteCount(question.getVoteCount());
        qDetailDto.setViewCount(question.getViewCount());
        qDetailDto.setContent(question.getContent());
        qDetailDto.setAnswerCount(question.getAnswers().size());
        qDetailDto.setRegDate(question.getRegDate());
        qDetailDto.setModDate(question.getModDate());
        qDetailDto.setNickName(question.getUser().getNickName());
        qDetailDto.setTagLists(question.getTagLists());
        return qDetailDto;

    }


    default QuestionLike questionPostLikeDtoToQuestionLike(Long id, QuestionLikeDto post){



        Question question = new Question();
        question.setQuestionId(id);

        QuestionLike questionLike = QuestionLike.builder()
                .status(post.getStatus())
                .question(question)
                .build();


        return questionLike;
    }



   default  List<QuestionMainResponseDto> QuestionToMainResponseDto(List<Question> questions) {

        return questions.stream().map(question -> {
            QuestionMainResponseDto qMainDto = new QuestionMainResponseDto();
            qMainDto.setQuestionId(question.getQuestionId());
            qMainDto.setTitle(question.getTitle());
            qMainDto.setVoteCount(question.getVoteCount());
            qMainDto.setAnswerCount(question.getAnswers().size());
            qMainDto.setRegDate(question.getRegDate());
            qMainDto.setModDate(question.getModDate());
            qMainDto.setNickName(question.getUser().getNickName());
            qMainDto.setTagLists(question.getTagLists());
            return qMainDto;
        }).collect(Collectors.toList());
   }

    default  List<AnswerResponseDto> AnswerToAnswerResponseDto(List<Answer> answers) {

        return answers.stream().map(answer -> {
            AnswerResponseDto aResDto = new AnswerResponseDto();
            aResDto.setAnswerId(answer.getAnswer_id());
            aResDto.setContent(answer.getContent());
            aResDto.setRegDate(answer.getCreatedDate());
            aResDto.setNickName(aResDto.getNickName());
            return aResDto;
        }).collect(Collectors.toList());
    }




    Question questionPatchDtoToQuestion(QuestionPatchDto patch);

    QuestionResponseDto questionToResponseDto(Question question);
}
