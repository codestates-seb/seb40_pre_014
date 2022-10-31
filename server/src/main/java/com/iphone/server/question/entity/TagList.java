package com.iphone.server.question.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TagList extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_list_id")
    private Long tagListId;

    @ManyToOne
    @JoinColumn(name="question_id" )
    @JsonIgnore
    private Question question;

    @ManyToOne
    @JoinColumn(name="tag_id" )
    private Tags tags;


}
