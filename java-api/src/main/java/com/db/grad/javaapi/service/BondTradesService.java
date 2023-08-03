package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.BondServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BondTradesService implements iBondTradesService {

    private BondServiceRepository bondServiceRepository;

    @Autowired
    public BondTradesService(BondServiceRepository theBondServiceRepository) {
        bondServiceRepository = theBondServiceRepository;
    };

    @Override
    public List<Trade> getAllBondTrades() {
        return bondServiceRepository.getAllBondTrades();
    }

    @Override
    public List<Trade> getBondTradesFromBook(int user_id, Book book) {
        return null;
    }

    @Override
    public List<Trade> getBondTradesDueToMature(int user_id) {
        return null;
    }

    @Override
    public List<Trade> getBondTradesNotSettled(int user_id) {
        return null;
    }

    @Override
    public List<Trade> getBondTradesMatured(int user_id) {
        return null;
    }

    @Override
    public Trade getBondTradeDetails(int trade_id) {
        return null;
    }
}
