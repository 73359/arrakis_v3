package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Counterparty;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.CounterpartyRepository;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.repository.TradesRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

public class BondsServiceTest {

    @Mock
    private SecurityRepository securityRepository;

    @Mock
    private TradesRepository tradesRepository;

    @Mock
    private CounterpartyRepository counterpartyRepository;

    @InjectMocks
    private BondsService bondsService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetActiveBonds() {
        List<Security> activeBonds = new ArrayList<>();
        // Add some test data to the list
        activeBonds.add(new Security());
        activeBonds.add(new Security());

        when(securityRepository.getActiveBonds()).thenReturn(activeBonds);

        List<Security> result = bondsService.getActiveBonds();

        assertEquals(activeBonds, result);
    }

    @Test
    public void testGetBondTrades() {
        int securityId = 1;
        String userId = "user123";

        List<Trade> bondTrades = new ArrayList<>();
        // Add some test data to the list
        bondTrades.add(new Trade());
        bondTrades.add(new Trade());

        when(tradesRepository.getBondTrades(eq(securityId), eq(userId))).thenReturn(bondTrades);

        List<Trade> result = bondsService.getBondTrades(securityId, userId);

        assertEquals(bondTrades, result);
    }

    @Test
    public void testGetBondsDueToMature() {
        // Create sample securities with valid maturity dates
        Security firstMaturedSecurity = new Security("2023-08-10");
        Security secondMaturedSecurity = new Security("2023-08-15");
        Security lastMaturedSecurity = new Security("2023-08-20");

        List<Security> securities = Arrays.asList(secondMaturedSecurity, lastMaturedSecurity, firstMaturedSecurity);
        System.out.println(securities.get(0).getMaturity_date() + " ||| " + securities.get(1).getMaturity_date() + " ||| " + securities.get(2).getMaturity_date());

        // Mock the security repository to return the list of securities
        when(securityRepository.getBondsDueToMature()).thenReturn(securities);

        // Call the service method
        List<Security> result = bondsService.getBondsDueToMature();
        System.out.println(result.get(0).getMaturity_date() + " ||| " + result.get(1).getMaturity_date() + " ||| " + result.get(2).getMaturity_date());
        
        // Assertions
        assertEquals(firstMaturedSecurity, result.get(0));
        assertEquals(secondMaturedSecurity, result.get(1));
        assertEquals(lastMaturedSecurity, result.get(2));
    }

    @Test
    public void testGetBondholder() {
        int tradeId = 1;
        Counterparty counterparty = new Counterparty();

        when(counterpartyRepository.getBondholder(eq(tradeId))).thenReturn(counterparty);

        Counterparty result = bondsService.getBondholder(tradeId);

        assertEquals(counterparty, result);
    }

    @Test
    public void testGetBondsFromResponsibleBooks() {
        String userId = "user123";
        List<Security> responsibleBonds = new ArrayList<>();
        // Add some test data to the list
        responsibleBonds.add(new Security());
        responsibleBonds.add(new Security());

        when(securityRepository.getBondsFromResponsibleBooks(eq(userId))).thenReturn(responsibleBonds);

        List<Security> result = bondsService.getBondsFromResponsibleBooks(userId);

        assertEquals(responsibleBonds, result);
    }
}
