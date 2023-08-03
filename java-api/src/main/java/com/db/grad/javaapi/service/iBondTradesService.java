package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Book;
import org.springframework.stereotype.Service;
import com.db.grad.javaapi.model.Trade;
import java.util.List;

public interface iBondTradesService
{
    public List<Trade> getAllBondTrades();
    public List<Trade> getBondTradesFromBook(int user_id, Book book);
    public List<Trade> getBondTradesDueToMature(int user_id);
    public List<Trade> getBondTradesNotSettled(int user_id);
    public List<Trade> getBondTradesMatured(int user_id);
    public Trade getBondTradeDetails(int trade_id);
}
