package com.iphone.server.answer.repository;

import com.iphone.server.answer.entity.Answer;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AnswerRepositoryTest {

    private final AnswerRepository answerRepository;


    public AnswerRepositoryTest(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    @Test
    public  void test(){
        answerRepository.deleteById(3l);

    }
}