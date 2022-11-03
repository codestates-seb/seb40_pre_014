package com.iphone.server.question.service;

import com.iphone.server.answer.entity.Answer;
import com.iphone.server.answer.repository.AnswerRepository;
import com.iphone.server.exception.BusinessLogicException;
import com.iphone.server.exception.ExceptionCode;
import com.iphone.server.question.entity.Question;
import com.iphone.server.question.entity.QuestionLike;
import com.iphone.server.question.repository.QuestionLikeRepository;
import com.iphone.server.question.repository.QuestionRepository;
import com.iphone.server.user.domain.User;
import com.iphone.server.user.domain.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final QuestionLikeRepository questionLikeRepository;

    private final UserRepository userRepository;

    private final AnswerRepository answerRepository;


    public QuestionService(QuestionRepository questionRepository, QuestionLikeRepository questionLikeRepository, UserRepository userRepository, AnswerRepository answerRepository) {
        this.questionRepository = questionRepository;
        this.questionLikeRepository = questionLikeRepository;
        this.userRepository = userRepository;
        this.answerRepository = answerRepository;
    }

    @Transactional
    public Question createQuestion(Question question){

        findVerifiedUser(question.getUser().getNumber());

        return questionRepository.save(question);
    }

    @Transactional
    public Question updateQuestion( Question question){
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(questionIndex->findQuestion.setTitle(questionIndex));

        Optional.ofNullable(question.getContent())
                .ifPresent(questionContent->findQuestion.setContent(questionContent));

        Question updatedQuestion = questionRepository.save(findQuestion);

        return updatedQuestion;
    }

    @Transactional
    public void deleteQuestion(Long id){
        Question findQuestion = findVerifiedQuestion(id);

        questionRepository.delete(findQuestion);
    }


    public Page<Question> findQuestions(int page, int size, String sort){


        Page<Question> findAllQuestion = questionRepository.findAll(
                PageRequest.of(page,size, Sort.by(sort).descending()));

        return findAllQuestion;

    }


    public Question findQuestion(long questionId){

        Question findQuestion = findVerifiedQuestion(questionId);
        findQuestion.setViewCount(findQuestion.getViewCount()+1);
        questionRepository.save(findQuestion);
        return findQuestion;
    }


    public Page<Question> searchByQuestion(String keyword, int page, int size, String sort){


        Page<Question> searchKeywordQuestion = questionRepository.searchByKeword(
               keyword ,PageRequest.of(page,size, Sort.by(sort).descending()));

        return searchKeywordQuestion;

    }


    @Transactional
    public QuestionLike likeQuestion(QuestionLike questionLike,Integer voteCount){

        Optional<Question> optionalQuestion = questionRepository.findById(questionLike.getQuestion().getQuestionId());
        Question findQuestion = optionalQuestion.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        findQuestion.setVoteCount(voteCount);

        questionRepository.save(findQuestion);
        return questionLikeRepository.save(questionLike);
    }


    public Question findVerifiedQuestion(long questionId){ //요청된 질문이 DB에 없으면 에러
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

    public void findVerifiedUser(long id){
        Optional<User> optionalUser= userRepository.findById(id);
        User findUser = optionalUser.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
    }

    public List<Answer> findAnswer(long questionId) {
        List<Answer> optionalAnswer = answerRepository.findByQuestionId(questionId);

        return optionalAnswer;
    }
}
