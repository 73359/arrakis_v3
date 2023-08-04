package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.repository.BondServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BondTradesService implements iBondTradesService {
    private BondServiceRepository bondServiceRepository;
    private SecurityRepository securityRepository;

    @Autowired
    public BondTradesService(BondServiceRepository theBondServiceRepository, SecurityRepository theBondSecurityRepository) {
        bondServiceRepository = theBondServiceRepository;
        securityRepository = theBondSecurityRepository;
    };

    @Override
    public List<Trade> getAllBondTrades() {
        return bondServiceRepository.findAll();
    }

    @Override
    public List<Trade> getBondTradesForUser(String user_id) {
        return bondServiceRepository.getBondTradesForUser(user_id);
    }

    @Override
    public List<Trade> getBondTradesDueToMature(String user_id) {
        return bondServiceRepository.getBondTradesDueToMature(user_id);
    }

    @Override
    public List<Trade> getBondTradesNotSettled(String user_id) {
        return bondServiceRepository.getBondTradesNotSettled(user_id);
    }

    @Override
    public List<Trade> getBondTradesMatured(String user_id) {
        return bondServiceRepository.getBondTradesMatured(user_id);
    }

    public List<Security> getActiveBonds(){
        return securityRepository.getActiveBonds();
    }
}
