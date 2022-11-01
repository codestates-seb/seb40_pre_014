package com.iphone.server.question.repository;


import com.iphone.server.question.entity.Tags;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TagsRepository extends JpaRepository<Tags, Long> {

    Optional<Tags> findByTagName(String tagName);

    Page<Tags> findAll(Pageable pageable);

}
