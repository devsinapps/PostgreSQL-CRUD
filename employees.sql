-- Table: human_resources.employees

-- DROP TABLE human_resources.employees;

CREATE TABLE human_resources.employees
(
    id serial NOT NULL,
    firstname character varying COLLATE pg_catalog."default",
    lastname character varying COLLATE pg_catalog."default",
    age integer,
    gender character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default",
    country character varying COLLATE pg_catalog."default",
    city character varying COLLATE pg_catalog."default",
    address character varying COLLATE pg_catalog."default",
    education character varying COLLATE pg_catalog."default",
    joindate date,
    CONSTRAINT employees_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE human_resources.employees
    OWNER to postgres;