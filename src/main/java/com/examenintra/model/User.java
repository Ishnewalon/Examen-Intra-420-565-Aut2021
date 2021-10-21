package com.examenintra.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class User {

    @GeneratedValue
    @Id
    Long id;

    private String name;

    private String guess;

    private String randoNumber;
}
