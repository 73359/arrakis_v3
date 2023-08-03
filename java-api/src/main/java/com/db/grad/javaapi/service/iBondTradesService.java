package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Trade;
import java.util.List;

public interface iBondTradesService
{
    public List<Trade> getAllBondTrades();
    public List<Trade> getBondTradesForUser(int user_id);
    public List<Trade> getBondTradesDueToMature(int user_id);
    public List<Trade> getBondTradesNotSettled(int user_id);
    public List<Trade> getBondTradesMatured(int user_id);
    public Trade getBondTradeDetails(int trade_id);
}
