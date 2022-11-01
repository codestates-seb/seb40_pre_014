package com.iphone.server.response;

import com.iphone.server.question.dto.AnswerResponseDto;
import com.iphone.server.question.dto.QuestionDetailResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DetailResponseDto{

    private QuestionDetailResponseDto question;

    private List<AnswerResponseDto> answer;



}
