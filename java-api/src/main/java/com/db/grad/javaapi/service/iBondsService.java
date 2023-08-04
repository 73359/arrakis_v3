package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;
import java.util.List;

public interface iBondsService
{
    public List<Trade> getAllBondTrades();
    public List<Trade> getBondTradesForUser(String user_id);
    public List<Trade> getBondTradesDueToMature(String user_id);
    public List<Trade> getBondTradesNotSettled(String user_id);
    public List<Trade> getBondTradesMatured(String user_id);
    public List<Security> getActiveBonds();
    public List<Security> getBondsDueToMature();
}
