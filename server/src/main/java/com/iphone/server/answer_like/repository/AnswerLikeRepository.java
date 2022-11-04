package com.iphone.server.answer_like.repository;

import com.iphone.server.answer_like.entity.AnswerLike;
import com.iphone.server.question.entity.QuestionLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnswerLikeRepository  extends JpaRepository<AnswerLike, Long> {

    @Query(value = "select alike from AnswerLike as alike where alike.status = '1' and alike.answer.answer_id= :id ")
    List<AnswerLike> findlikeCount(@Param("id") Long id);

    @Query(value = "select alike from AnswerLike as alike where alike.status = '0' and alike.answer.answer_id = :id")
    List<AnswerLike> findUnlikeCount(@Param("id") Long id);


    @Modifying
    @Query(value = "delete from AnswerLike al where al.answer.answer_id = :id")
    void deleteByAnswerLikeId(@Param("id") Long id);
}
