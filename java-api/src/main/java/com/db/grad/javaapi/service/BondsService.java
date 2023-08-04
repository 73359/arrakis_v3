package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.TradesRepository;
import com.db.grad.javaapi.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BondsService implements iBondsService {

    private TradesRepository tradesRepository;
    private SecurityRepository securityRepository;

    @Autowired
    public BondsService(TradesRepository theTradesRepository, SecurityRepository theSecurityRepository) {
        tradesRepository = theTradesRepository;
        securityRepository = theSecurityRepository;
    }

    @Override
    public List<Trade> getAllBondTrades() {
        return tradesRepository.findAll();
    }

    @Override
    public List<Trade> getBondTradesForUser(String user_id) {
        return tradesRepository.getBondTradesForUser(user_id);
    }

    @Override
    public List<Trade> getBondTradesDueToMature(String user_id) {
        return tradesRepository.getBondTradesDueToMature(user_id);
    }

    @Override
    public List<Trade> getBondTradesNotSettled(String user_id) {
        return tradesRepository.getBondTradesNotSettled(user_id);
    }

    @Override
    public List<Trade> getBondTradesMatured(String user_id) {
        return tradesRepository.getBondTradesMatured(user_id);
    }

    public List<Security> getActiveBonds(){
        return securityRepository.getActiveBonds();
    }

    @Override
    public List<Security> getBondsDueToMature(){
        return securityRepository.getBondsDueToMature();
    }
}
