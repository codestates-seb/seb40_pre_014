package com.iphone.server.user.dto;

import com.iphone.server.answer.entity.Answer;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class User extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private Long number;

    @Column(name="user_email",unique=true)
    private String email;

    @Column(name = "user_password")
    private String password;

    @Column(name="user_nickname")
    private String nickName;

    @Column(name="img")
    private String img;

    @Column(name="type")
    private String type;

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    public void addAnswer(Answer answer)
    {
        answers.add(answer);
    }


}
