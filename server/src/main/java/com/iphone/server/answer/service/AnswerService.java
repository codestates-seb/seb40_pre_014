package com.iphone.server.answer.service;

import com.iphone.server.answer.entity.Answer;
import com.iphone.server.answer.repository.AnswerRepository;
import com.iphone.server.exception.BusinessLogicException;
import com.iphone.server.exception.ExceptionCode;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnswerService {

    AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer)
    {
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
    public void deleteAnswer(long answer_id)
    {        Answer findAnswer = findVerifiedAnswer(answer_id);

        answerRepository.delete(findAnswer);
    }
    public Answer findVerifiedAnswer(long answerId){ //요청된 답이 DB에 없으면 에러
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }
}
