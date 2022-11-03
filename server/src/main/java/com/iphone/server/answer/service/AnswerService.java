package com.iphone.server.answer.service;

import com.iphone.server.answer.entity.Answer;
import com.iphone.server.answer.repository.AnswerRepository;
import com.iphone.server.answer_like.entity.AnswerLike;
import com.iphone.server.answer_like.repository.AnswerLikeRepository;
import com.iphone.server.exception.BusinessLogicException;
import com.iphone.server.exception.ExceptionCode;
import com.iphone.server.question.repository.QuestionRepository;
import com.iphone.server.user.domain.User;
import com.iphone.server.user.domain.UserRepository;
import com.iphone.server.user.dto.UserRegisterRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;
@Slf4j
@Service
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;
    private final AnswerLikeRepository answerLikeRepository;
    private final UserRepository userRepository;

    public AnswerService(AnswerRepository answerRepository, QuestionRepository questionRepository, AnswerLikeRepository answerLikeRepository, UserRepository userRepository) {
        this.answerRepository = answerRepository;
        this.questionRepository = questionRepository;
        this.answerLikeRepository = answerLikeRepository;
        this.userRepository = userRepository;
    }

    public Answer createAnswer(Answer answer)
    {
        findVerifiedUser(answer.getUser().getNumber());
        return answerRepository.save(answer);
    }
    public Answer updateAnswer(Answer answer)
    {

        Answer findAnswer = findVerifiedAnswer(answer.getAnswer_id());
        Optional.ofNullable(answer.getContent())
                .ifPresent(answerContent -> findAnswer.setContent(answerContent));
        Answer updateAnswer = answerRepository.save(findAnswer);

        return updateAnswer;

    }

    @Transactional
    public void deleteAnswer(long answer_id)
    {

        Answer findAnswer = findVerifiedAnswer(answer_id);

        answerLikeRepository.deleteByAnswerLikeId(answer_id);


        answerRepository.deleted(findAnswer.getAnswer_id());
    }


    @Transactional
    public AnswerLike likeAnswer(AnswerLike answerLike, Integer voteCount){

        Optional<Answer> optionalAnswer = answerRepository.findById(answerLike.getAnswer().getAnswer_id());
        Answer findAnswer = optionalAnswer.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        findAnswer.setVoteCount(voteCount);

        answerRepository.save(findAnswer);
        return answerLikeRepository.save(answerLike);
    }


    public Answer findVerifiedAnswer(long answerId){ //요청된 답이 DB에 없으면 에러
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

    public void findVerifiedUser(long id){
        Optional<User> optionalUser= userRepository.findById(id);
        User findUser = optionalUser.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
    }
}
