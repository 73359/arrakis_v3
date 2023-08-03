package com.db.grad.javaapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "security")
public class Security {
    @Id
    private int id;
    private String isin;
    private String cusip;
    private String issuer_name;
    private float coupon_percent;
    private String bond_currency;
    private float face_value;
    private String maturity_date; //TODO which date or String?
    private String status;
    private String type;

    @Id
    @Column(name = "security_id", nullable = false)
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "isin", nullable = false)
    public String getIsin() {
        return isin;
    }
    public void setIsin(String isin) {
        this.isin = isin;
    }

    @Column(name = "cusip", nullable = false)
    public String getCusip() {
        return cusip;
    }
    public void setCusip(String cusip) {
        this.cusip = cusip;
    }

    @Column(name = "issuer_name", nullable = false)
    public String getIssuer_name() {
        return issuer_name;
    }
    public void setIssuer_name(String issuer_name) {
        this.issuer_name = issuer_name;
    }

    @Column(name = "coupon_percent", nullable = false)
    public float getCoupon_percent() {
        return coupon_percent;
    }
    public void setCoupon_percent(float coupon_percent) {
        this.coupon_percent = coupon_percent;
    }

    @Column(name = "bond_currency", nullable = false)
    public String getBond_currency() {
        return bond_currency;
    }
    public void setBond_currency(String bond_currency) {
        this.bond_currency = bond_currency;
    }

    @Column(name = "face_value", nullable = false)
    public float getFace_value() {
        return face_value;
    }
    public void setFace_value(float face_value) {
        this.face_value = face_value;
    }

    @Column(name = "maturity_date", nullable = false)
    public String getMaturity_date() {
        return maturity_date;
    }
    public void setMaturity_date(String maturity_date) {
        this.maturity_date = maturity_date;
    }

    @Column(name = "status", nullable = false)
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    @Column(name = "type", nullable = false)
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
}
