package com.iphone.server.answer.repository;

import com.iphone.server.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer,Long> {
 //   Optional<Answer> findByAnswer_id();

}
