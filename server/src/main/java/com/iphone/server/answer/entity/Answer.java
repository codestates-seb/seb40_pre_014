package com.iphone.server.answer.entity;

import com.iphone.server.answer_like.entity.AnswerLike;
import com.iphone.server.question.entity.Question;
import com.iphone.server.user.domain.BaseTimeEntity;
import com.iphone.server.user.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="answer_id")
    private Long answer_id;

    @Column(name="content",nullable = false)
    private String content;


    @ManyToOne
    @JoinColumn(name="question_id" )
    private Question question;

    @ManyToOne
    @JoinColumn(name="user_id",nullable = true )
    private User user;


    @Column
    @ColumnDefault("0")
    private int voteCount;

    @Column
    @ColumnDefault("0")
    private int viewCount;

    public Answer(Long answer_id, String content) {
        this.answer_id = answer_id;
        this.content = content;
    }

    @OneToMany(mappedBy = "answer")
    private List<AnswerLike> answer_likes = new ArrayList<>();

    public void addAnswer_like(AnswerLike answer_like)
    {
        answer_likes.add(answer_like);
    }
}
