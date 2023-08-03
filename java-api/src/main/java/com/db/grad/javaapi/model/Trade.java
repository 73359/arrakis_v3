package com.db.grad.javaapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "trades")
public class Trade {
    @Id
    private int id;
    private int book_id;
    private int security_id;
    private int counterparty_id;
    private String trade_type;
    private String trade_currency;
    private int quantity;
    private String trade_settlement_date; //TODO which date or String?
    private String trade_status;
    private String trade_date; //TODO which date or String?
    private float unit_price;

    @Id
    @Column(name = "trade_id", nullable = false)
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "book_id", nullable = false)
    public int getBook_id() {
        return book_id;
    }
    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }

    @Column(name = "security_id", nullable = false)
    public int getSecurity_id() {
        return security_id;
    }
    public void setSecurity_id(int security_id) {
        this.security_id = security_id;
    }

    @Column(name = "counterparty_id", nullable = false)
    public int getCounterparty_id() {
        return counterparty_id;
    }
    public void setCounterparty_id(int counterparty_id) {
        this.counterparty_id = counterparty_id;
    }

    @Column(name = "trade_type", nullable = false)
    public String getTrade_type() {
        return trade_type;
    }
    public void setTrade_type(String trade_type) {
        this.trade_type = trade_type;
    }

    @Column(name = "trade_currency", nullable = false)
    public String getTrade_currency() {
        return trade_currency;
    }
    public void setTrade_currency(String trade_currency) {
        this.trade_currency = trade_currency;
    }

    @Column(name = "quantity", nullable = false)
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Column(name = "trade_settlement_date", nullable = false)
    public String getTrade_settlement_date() {
        return trade_settlement_date;
    }
    public void setTrade_settlement_date(String trade_settlement_date) {
        this.trade_settlement_date = trade_settlement_date;
    }

    @Column(name = "trade_status", nullable = false)
    public String getTrade_status() {
        return trade_status;
    }
    public void setTrade_status(String trade_status) {
        this.trade_status = trade_status;
    }

    @Column(name = "trade_date", nullable = false)
    public String getTrade_date() {
        return trade_date;
    }
    public void setTrade_date(String trade_date) {
        this.trade_date = trade_date;
    }

    @Column(name = "unit_price", nullable = false)
    public float getUnit_price() {
        return unit_price;
    }
    public void setUnit_price(float unit_price) {
        this.unit_price = unit_price;
    }
}
