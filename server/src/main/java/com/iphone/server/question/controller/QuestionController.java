package com.iphone.server.question.controller;

import com.iphone.server.answer.entity.Answer;
import com.iphone.server.question.dto.QuestionLikeDto;
import com.iphone.server.question.dto.QuestionLikeResponseDto;
import com.iphone.server.question.dto.QuestionPatchDto;
import com.iphone.server.question.dto.QuestionPostDto;
import com.iphone.server.question.entity.Question;
import com.iphone.server.question.entity.QuestionLike;
import com.iphone.server.question.entity.Tags;
import com.iphone.server.question.mapper.QuestionMapper;
import com.iphone.server.question.mapper.TagsMapper;
import com.iphone.server.question.repository.QuestionLikeRepository;
import com.iphone.server.question.repository.QuestionRepository;
import com.iphone.server.question.service.QuestionService;
import com.iphone.server.question.service.TagService;
import com.iphone.server.response.DetailResponseDto;
import com.iphone.server.response.MultiResponseDto;

import com.iphone.server.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

@Validated
@RequiredArgsConstructor
@RestController
@Slf4j
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper questionMapper;

    private final QuestionRepository questionRepository;

    private final QuestionLikeRepository questionLikeRepository;

    private final TagsMapper tagsMapper;

    private final TagService tagService;

    // 질문 --------------------------------


    //메인 페이지 출력
    @GetMapping("/question")
    public ResponseEntity getQuestions(@Positive @RequestParam("page") int page,
                                       @Positive @RequestParam("size") int size,
                                       @RequestParam("sort") String sort) {

        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size, sort);

        List<Question> questions = pageQuestions.getContent();


        return new ResponseEntity<>(new MultiResponseDto<>(questionMapper.QuestionToMainResponseDto(questions),pageQuestions),
                HttpStatus.OK);

    }



    // 상세 페이지 출력
    @GetMapping("/question/{question-id}")
    public ResponseEntity getQuestion(@Positive @PathVariable("question-id") long questionId){

        Question question = questionService.findQuestion(questionId);
        List<Answer> answer = questionService.findAnswer(questionId);


        return new ResponseEntity<>(new SingleResponseDto<>(new DetailResponseDto(questionMapper.QuestionToQuestionDetailResponseDto(question),questionMapper.AnswerToAnswerResponseDto(answer))),
                HttpStatus.OK);

    }

        //검색 페이지
    @GetMapping("/question/search")
    public ResponseEntity searchQuestion(@RequestParam("keyword") String keyword,
                                         @Positive @RequestParam("page") int page,
                                         @Positive @RequestParam("size") int size,
                                         @RequestParam("sort") String sort){
        Page<Question> pageQuestions = questionService.searchByQuestion(keyword,page - 1, size, sort);
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>( new MultiResponseDto<>( questionMapper.QuestionToMainResponseDto(questions),pageQuestions) ,
                HttpStatus.OK);
    }


    //질문글 등록
    @PostMapping("/question/{user-id}")
    public ResponseEntity postQuestion(@PathVariable("user-id") @Positive @NotNull  long userId, @RequestBody @Valid QuestionPostDto questionPostDto){

        Question question = questionService.createQuestion(questionMapper.questionPostDtoToQuestion(userId,questionPostDto));

        tagService.createTags(questionPostDto,question.getQuestionId());


        return new ResponseEntity<>(new SingleResponseDto<>(questionMapper.questionToResponseDto(question)),
                HttpStatus.CREATED);
    }



    // 질문 수정
    @PatchMapping("/question/{question-id}")
    public ResponseEntity updateQuestion(@PathVariable("question-id") @Positive @NotNull  long questionId, @RequestBody @Valid QuestionPatchDto questionPatchDto){
        questionPatchDto.setQuestionId(questionId);

        Question question = questionService.updateQuestion(questionMapper.questionPatchDtoToQuestion(questionPatchDto));

        return new ResponseEntity<>(new SingleResponseDto<>(questionMapper.questionToResponseDto(question)),
                HttpStatus.OK);
    }

    //질문 삭제
    @DeleteMapping("/question/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive @NotNull  long questionId){
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(new SingleResponseDto<>("삭제완료"),
                HttpStatus.OK);
    }






    // 질문 좋아요 ----------------------------------------

    //질문 글 추천


    @PostMapping("/question/like/{question-id}")
    public ResponseEntity likeQuestion(@PathVariable("question-id") @Positive @NotNull long questionId,
                                       @Valid @RequestBody QuestionLikeDto questionLikeDto) {
        int voteCount = questionLikeRepository.findlikeCount(questionId).size()- questionLikeRepository.findUnlikeCount(questionId).size();

        QuestionLike likeQuestion = questionService.likeQuestion(questionMapper.questionPostLikeDtoToQuestionLike(questionId,questionLikeDto),voteCount);

        QuestionLikeResponseDto questionLikeResponseDto = new QuestionLikeResponseDto();
        questionLikeResponseDto.setQuestionLikeId(likeQuestion.getQuestionLikeId());


        return new ResponseEntity<>(new SingleResponseDto<>(questionLikeResponseDto),
                HttpStatus.CREATED);
    }
    //태그 ------------------------------------------


    // 태그 페이지 조회
    @GetMapping("/tags")
    public ResponseEntity getTags(@Positive @RequestParam("page") int page,
                                  @Positive @RequestParam("size") int size,
                                  @RequestParam("sort") String sort){
        Page<Tags> pageTags = tagService.findTags(page-1, size, sort);

        List<Tags> tags = pageTags.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(tagsMapper.tagsToTagsResponseDto(tags),pageTags),
                HttpStatus.OK);
    }




}
