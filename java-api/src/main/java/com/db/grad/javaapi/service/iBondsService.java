package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Counterparty;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;

import java.util.List;

public interface iBondsService
{
/**
    public List<Trade> getAllBondTrades();
    public List<Trade> getBondTradesForUser(String user_id);
    public List<Trade> getBondTradesDueToMature(String user_id);
    public List<Trade> getBondTradesNotSettled(String user_id);
    public List<Trade> getBondTradesMatured(String user_id);
<<<<<<< HEAD
 */

    List<Security> getActiveBonds();
    List<Trade> getBondTrades(int security_id, String user_id);
    List<Security> getBondsDueToMature();
    Counterparty getBondholder(int tradeId);
    List<Security> getBondsFromResponsibleBooks(String user_id);
}
