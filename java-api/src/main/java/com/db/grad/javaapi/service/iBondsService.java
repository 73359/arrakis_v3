package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Counterparty;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;

import java.util.List;

public interface iBondsService
{
    List<Security> getActiveBonds();
    List<Trade> getBondTrades(int security_id, String user_id);
    List<Security> getBondsDueToMature();
    Counterparty getBondholder(int tradeId);
    List<Security> getBondsFromResponsibleBooks(String user_id);
    List<Counterparty> getAllBondholder();
}
