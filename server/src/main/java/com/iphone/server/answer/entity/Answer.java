package com.iphone.server.answer.entity;

import com.iphone.server.answer_like.entity.Answer_like;
import com.iphone.server.user.dto.BaseTimeEntity;
import com.iphone.server.user.dto.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    public Answer(Long answer_id, String content) {
        this.answer_id = answer_id;
        this.content = content;
    }

    @OneToMany(mappedBy = "answer")
    private List<Answer_like> answer_likes = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public void addUsser(User user)
    {
        this.user=user;
    }

    public void addAnswer_like(Answer_like answer_like)
    {
        answer_likes.add(answer_like);
    }
}

// 레파지토리 , 엔티티 추가