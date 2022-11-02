package com.iphone.server.answer.controller;

import com.iphone.server.answer.dto.AnswerLikeDto;
import com.iphone.server.answer.dto.AnswerLikeResponseDto;
import com.iphone.server.answer.dto.AnswerPatchDto;
import com.iphone.server.answer.dto.AnswerPostDto;
import com.iphone.server.answer.entity.Answer;
import com.iphone.server.answer.mapper.AnswerMapper;
import com.iphone.server.answer.repository.AnswerRepository;
import com.iphone.server.answer.response.SingleResponseDto;
import com.iphone.server.answer.service.AnswerService;
import com.iphone.server.answer_like.entity.AnswerLike;
import com.iphone.server.answer_like.repository.AnswerLikeRepository;
import com.iphone.server.question.dto.QuestionLikeDto;
import com.iphone.server.question.dto.QuestionLikeResponseDto;
import com.iphone.server.question.entity.QuestionLike;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;


@Validated
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/answers")

public class AnswerController {

    // 답변 작성
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    private final AnswerLikeRepository answerLikeRepository;
    private final AnswerRepository answerRepository;



    // 답변 작성
    @PostMapping("/answer")
    public ResponseEntity postAnswer(@RequestBody @Valid AnswerPostDto answerPostDto) {

        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)),
                HttpStatus.CREATED);
    }

    // 답변 수정
    @PatchMapping("/answer/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive @NotNull long answer_id, @RequestBody @Valid AnswerPatchDto answerPatchDto)

    {
        answerPatchDto.setAnswer_id(answer_id);
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)),
                HttpStatus.CREATED);

    }
    // 답변 삭제
    @DeleteMapping("/answer/{answer-id")
    public ResponseEntity deleteMember(@PathVariable("answer-id") @Positive @NotNull long answer_id)
    {
        answerService.deleteAnswer(answer_id);
        return new ResponseEntity<>("삭제완료",HttpStatus.OK);

    }

    // 답변 좋아요
    @PostMapping("/answer/like/{answer-id}")
    public ResponseEntity likeAnswer(@PathVariable("answer-id") @Positive @NotNull long answer_id,
                                       @Valid @RequestBody AnswerLikeDto answerLikeDto) {
        int voteCount = answerLikeRepository.findlikeCount(answer_id).size()- answerLikeRepository.findUnlikeCount(answer_id).size();

        AnswerLike likeAnswer =answerService.likeAnswer(mapper.answerPostLikeDtoToQuestionLike(answer_id,answerLikeDto),voteCount);

        AnswerLikeResponseDto answerLikeResponseDto = new AnswerLikeResponseDto();
        answerLikeResponseDto.setAnswerLikeId(likeAnswer.getAnswer_like_id());

        return new ResponseEntity<>(new com.iphone.server.response.SingleResponseDto<>(answerLikeResponseDto),
                HttpStatus.CREATED);
    }

}
