CREATE TABLE IF NOT EXISTS ANSWER (

    answer_id bigint NOT NULL AUTO_INCREMENT,
    content varchar(100) NOT NULL,
    PRIMARY KEY (answer_id)

    );
CREATE TABLE IF NOT EXISTS ANSWER_LIKE (

        answer_like_id bigint NOT NULL AUTO_INCREMENT,
        answer_id bigint NOT NULL AUTO_INCREMENT,
        content varchar(100) NOT NULL,
        PRIMARY KEY (answer_like_id),

        FOREIGN KEY (answer_id) REFERENCES ANSWER(answer_id)


);