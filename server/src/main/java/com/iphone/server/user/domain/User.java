package com.iphone.server.user.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="seb_user")
public class User extends BaseTimeEntity {
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
}
