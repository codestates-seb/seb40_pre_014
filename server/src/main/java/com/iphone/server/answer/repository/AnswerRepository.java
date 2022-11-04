package com.iphone.server.answer.repository;

import com.iphone.server.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface AnswerRepository extends JpaRepository<Answer,Long> {
 //   Optional<Answer> findByAnswer_id();
 @Query("select a from Answer a where a.question.questionId = :id")
 List<Answer> findByQuestionId(@Param("id") Long id);

 @Modifying
 @Query("delete from Answer a where a.answer_id = ?1")
 void deleted(Long id);

}
