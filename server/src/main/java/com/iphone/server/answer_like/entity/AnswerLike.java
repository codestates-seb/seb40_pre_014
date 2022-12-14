package com.iphone.server.answer_like.entity;

import com.iphone.server.answer.entity.Answer;
import com.iphone.server.user.domain.BaseTimeEntity;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Builder
@Entity
public class AnswerLike extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="answer_like_id")
    private long answer_like_id;

    @Column(name="status")
    private char status;

    @ManyToOne(fetch = FetchType.LAZY )
    @JoinColumn(name = "answer_id")
    private Answer answer;

    public void addAnswer(Answer answer)
    {
        this.answer=answer;
    }

    public AnswerLike(long answer_like_id, char status) {
        this.answer_like_id = answer_like_id;
        this.status = status;
    }
}
