package com.db.grad.javaapi.controller;

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
/**
    @GetMapping("/bondtrades")
    public List<Trade> getAllBondTrades() {
        return bondsService.getAllBondTrades();
    }
    @GetMapping("/bondtrades/for/{user_id}")
    public List<Trade> getBondTradesForUser(@PathVariable String user_id) {
        return bondsService.getBondTradesForUser(user_id);
    }
    @GetMapping("/bondtrades/for/{user_id}/duetomature")
    public List<Trade> getBondTradesDueToMature(@PathVariable String user_id) {
        return bondsService.getBondTradesDueToMature(user_id);
    }
    @GetMapping("/bondtrades/for/{user_id}/notsettled")
    public List<Trade> getBondTradesNotSettled(@PathVariable String user_id) {
        return bondsService.getBondTradesNotSettled(user_id);
    }
    @GetMapping("/bondtrades/for/{user_id}/matured")
    public List<Trade> getBondTradesMatured(@PathVariable String user_id) {
        return bondsService.getBondTradesMatured(user_id);
    }
 */
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
}
