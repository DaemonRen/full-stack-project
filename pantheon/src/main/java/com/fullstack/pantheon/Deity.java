package com.fullstack.pantheon;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Deity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String deityName;
    private String deityOf;
    private String deityPantheon;
    private String createdBy;
    private int dateCreated;

    public Deity() {
        this.dateCreated = 110122;
    }

    public Deity(String deityName, String deityOf, String deityPantheon, String createdBy, int dateCreated) {

        this.deityName = deityName;
        this.deityOf = deityOf;
        this.deityPantheon = deityPantheon;
        this.createdBy = createdBy;
        this.dateCreated = dateCreated;
    }

    public int getId() {
        return id;
    }

    public String getDeityName() {
        return deityName;
    }

    public String getDeityOf() {
        return deityOf;
    }

    public String getDeityPantheon() {
        return deityPantheon;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public int getDateCreated() {
        return dateCreated;
    }
}
