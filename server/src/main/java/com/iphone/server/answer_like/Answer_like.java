package com.iphone.server.answer_like;

import com.iphone.server.answer.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity

public class Answer_like extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="answer_like_id")
    private int answer_like_id;

    @Column(name="status")
    private char status;

    public Answer_like(int answer_like_id, char status) {
        this.answer_like_id = answer_like_id;
        this.status = status;
    }
}
