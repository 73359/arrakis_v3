package com.db.grad.javaapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "counter_party")
public class Counterparty {
    @Id
    private int id;
    private String bond_holder;

    @Id
    @Column(name = "counter_party_id", nullable = false)
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "bond_holder", nullable = false)
    public String getBond_holder() {
        return bond_holder;
    }
    public void setBond_holder(String bond_holder) {
        this.bond_holder = bond_holder;
    }
}
