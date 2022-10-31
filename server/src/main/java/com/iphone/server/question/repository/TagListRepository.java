package com.iphone.server.question.repository;

import com.iphone.server.question.entity.TagList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagListRepository extends JpaRepository<TagList, Long> {
}
