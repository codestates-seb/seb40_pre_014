package com.iphone.server.answer.controller;

import com.iphone.server.answer.dto.AnswerPatchDto;
import com.iphone.server.answer.dto.AnswerPostDto;
import com.iphone.server.answer.mapper.entity.Answer;
import com.iphone.server.answer.mapper.AnswerMapper;
import com.iphone.server.answer.response.SingleResponseDto;
import com.iphone.server.answer.service.AnswerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Validated
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/answers")

public class AnswerController {

    // 답변 작성
    private final AnswerService answerService;
    private final AnswerMapper mapper;


    // 답변 작성
    @PostMapping("/answer")
    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerPostDto) {

        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)),
                HttpStatus.CREATED);
    }

    // 답변 수정 ( 자기 답변 아니면 접근 x)
    @PatchMapping("/answer/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") long answer_id, @RequestBody AnswerPatchDto answerPatchDto)

    {
        answerPatchDto.setAnswer_id(answer_id);
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)),
                HttpStatus.CREATED);

    }
    @DeleteMapping("/answer/{answer-id")
    public ResponseEntity deleteMember(@PathVariable("answer-id") long answer_id)
    {
        answerService.deleteAnswer(answer_id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
