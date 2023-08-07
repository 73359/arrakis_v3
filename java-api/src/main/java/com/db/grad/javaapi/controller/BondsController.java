package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Counterparty;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.service.BondsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class BondsController {
    private BondsService bondsService;

    @Autowired
    public BondsController(BondsService theBondsService) {
        bondsService = theBondsService;
    }

    @GetMapping("/bonds/active")
    public List<Security> getActiveBonds() {
        return bondsService.getActiveBonds();
    }

    @GetMapping("/bonds/{security_id}/trades/for/{user_id}")
    public List<Trade> getBondTrades(@PathVariable int security_id, @PathVariable String user_id) {
        return bondsService.getBondTrades(security_id, user_id);
    }

    @GetMapping("/bonds/duetomature")
    public List<Security> getBondsDueToMature() {
        return bondsService.getBondsDueToMature();
    }

    @GetMapping("/bondholder/{trade_id}")
    public Counterparty getBondholder(@PathVariable int trade_id) {
        return bondsService.getBondholder(trade_id);
    }

    @GetMapping("/bonds/from/responsible/books/{user_id}")
    public List<Security> getBondsFromResponsibleBooks(@PathVariable String user_id) {
        return bondsService.getBondsFromResponsibleBooks(user_id);
    }

    @GetMapping("/allbondholder")
    public List<Counterparty> getAllBondholder() {
        return bondsService.getAllBondholder();
    }
}
