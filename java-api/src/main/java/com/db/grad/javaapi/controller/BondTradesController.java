package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.service.BondTradesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class BondTradesController {
    private BondTradesService bondTradesService;

    @Autowired
    public BondTradesController(BondTradesService theBondTradesService) {
        bondTradesService = theBondTradesService;
    }

    @GetMapping("/bondtrades")
    public List<Trade> getAllBondTrades() {
        return bondTradesService.getAllBondTrades();
    }

    @GetMapping("/bondtrades/for/{user_id}")
    public List<Trade> getBondTradesForUser(@PathVariable int user_id) {
        return bondTradesService.getBondTradesForUser(user_id);
    }

    @GetMapping("/bondtrades/for/{user_id}/duetomature")
    public List<Trade> getBondTradesDueToMature(@PathVariable int user_id) {
        return bondTradesService.getBondTradesDueToMature(user_id);
    }


}
