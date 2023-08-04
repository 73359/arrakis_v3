package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Counterparty;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.CounterpartyRepository;
import com.db.grad.javaapi.repository.TradesRepository;
import com.db.grad.javaapi.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class BondsService implements iBondsService {

    private TradesRepository tradesRepository;
    private SecurityRepository securityRepository;
    private CounterpartyRepository counterpartyRepository;

    @Autowired
    public BondsService(TradesRepository theTradesRepository, SecurityRepository theSecurityRepository, CounterpartyRepository theCounterpartyRepository) {
        tradesRepository = theTradesRepository;
        securityRepository = theSecurityRepository;
        counterpartyRepository = theCounterpartyRepository;
    }

/**
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
*/
    @Override
    public List<Security> getActiveBonds(){
        return securityRepository.getActiveBonds();
    }

    @Override
    public List<Trade> getBondTrades(int security_id, String user_id) {
        return tradesRepository.getBondTrades(security_id, user_id);
    }

    @Override
    public List<Security> getBondsDueToMature(){

        List<Security> bonds=securityRepository.getBondsDueToMature();
        Collections.sort(bonds, new Comparator<Security>() {
            @Override
            public int compare(Security b1, Security b2) {
                return b1.getMaturity_date().compareTo(b2.getMaturity_date());
            }
        });
        return bonds;
    }

    public Counterparty getBondholder(int trade_id) {
        return counterpartyRepository.getBondholder(trade_id);
    }

    public List<Security> getBondsFromResponsibleBooks(String user_id) {
        return securityRepository.getBondsFromResponsibleBooks(user_id);
    }
}
