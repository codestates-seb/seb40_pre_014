package com.iphone.server.question.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.iphone.server.answer.mapper.entity.Answer;

import com.iphone.server.user.domain.User;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
//@ToString(exclude = "user")
public class Question extends BaseEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private Long questionId;

    @Column
    private String title;

    @Column
    private String content;


    @Column
    @ColumnDefault("0")
    private int voteCount;

    @Column
    @ColumnDefault("0")
    private int viewCount;

    @OneToMany(mappedBy = "question",cascade = {CascadeType.ALL})
    @JsonIgnore
    private List<QuestionLike> questionLikes;


    @OneToMany(mappedBy = "question", cascade = {CascadeType.ALL} , fetch = FetchType.EAGER )
    @JsonIgnore
    private List<TagList> tagLists;

    //fetch  toMany 중복문제 해결
    @Fetch(FetchMode.SELECT)
    @OneToMany(mappedBy = "question", cascade = {CascadeType.ALL} , fetch = FetchType.EAGER )
    @JsonIgnore
    private List<Answer> answers;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = true )
    private User user;




}
