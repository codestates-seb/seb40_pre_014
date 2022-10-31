package com.iphone.server.user.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="member")
public class User extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long number;

    @Column(name="email",unique=true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name="nickname")
    private String nickName;

    @Column(name="img")
    private String img;

    @Column(name="type")
    private String type;
}
