package com.iphone.server.question.repository;


import com.iphone.server.question.entity.QuestionLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionLikeRepository extends JpaRepository<QuestionLike, Long> {
    @Query(value = "select qlike from QuestionLike as qlike where qlike.status = '1' and qlike.question.questionId = :id ")
    List<QuestionLike> findlikeCount(@Param("id") Long id);

    @Query(value = "select qlike from QuestionLike as qlike where qlike.status = '0' and qlike.question.questionId = :id")
    List<QuestionLike> findUnlikeCount(@Param("id") Long id);
}
