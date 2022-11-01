package com.iphone.server.question.repository;

import com.iphone.server.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;


public interface QuestionRepository extends JpaRepository<Question, Long> {


    Page<Question> findAll(Pageable pageable);


    @Query(value = "SELECT distinct q FROM Question q\n" +
            "LEFT JOIN TagList tl\n" +
            "ON q.questionId = tl.question.questionId\n" +
            "LEFT JOIN Tags t\n" +
            "ON t.tagId = tl.tags.tagId\n" +
            "WHERE q.title  LIKE %:keyword% OR q.content LIKE  %:keyword% OR t.tagName LIKE %:keyword% ")
    Page<Question> searchByKeword(@Param("keyword") String keyword,Pageable pageable);
}
