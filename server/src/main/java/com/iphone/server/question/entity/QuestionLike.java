package com.iphone.server.question.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class QuestionLike extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionLikeId;

    @Column
    private Character status;

    @ManyToOne(fetch = FetchType.LAZY )
    @JoinColumn(name="question_id" )
    private Question question;

}
