package com.iphone.server.question.service;

import com.iphone.server.question.dto.QuestionPostDto;
import com.iphone.server.question.entity.Question;
import com.iphone.server.question.entity.TagList;
import com.iphone.server.question.entity.Tags;
import com.iphone.server.question.repository.TagListRepository;
import com.iphone.server.question.repository.TagsRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Slf4j
@Service
public class TagService {

    private final TagsRepository tagsRepository;
    private final TagListRepository tagListRepository;

    public TagService(TagsRepository tagsRepository, TagListRepository tagListRepository) {
        this.tagsRepository = tagsRepository;
        this.tagListRepository = tagListRepository;
    }

    @Transactional
    public void createTags(QuestionPostDto questionPostDto, Long id){
        for(String s : questionPostDto.getQuestionTags()){
            Tags tag = tagsRepository.findByTagName(s).orElse(null);
            Long tagId = 0L;
            if(tag == null){
                Tags tagss = new Tags();
                Tags tagIn = Tags.builder()
                        .tagName(s)
                        .content(null)
                        .build();
                Tags tagSave =  tagsRepository.save(tagIn);
                tagId = tagSave.getTagId();
            }else{
                tagId = tag.getTagId();
            }

            Question question = Question.builder().questionId(id).build();
            Tags tagName = Tags.builder().tagId(tagId).build();
            TagList tagList = TagList.builder()
                    .question(question)
                    .tags(tagName)
                    .build();
            tagListRepository.save(tagList);
        }

    }

    public Page<Tags> findTags(int page, int size, String sort){
        Page<Tags> findAllTags;

        if(sort.contains("tagName")){
           findAllTags = tagsRepository.findAll(PageRequest.of(page,size, Sort.by(sort).ascending()));
        }else{
           findAllTags = tagsRepository.findAll(PageRequest.of(page,size, Sort.by(sort).descending()));
        }

        return findAllTags;
    }


}
