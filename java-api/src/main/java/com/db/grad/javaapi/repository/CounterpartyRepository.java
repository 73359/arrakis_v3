package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Counterparty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CounterpartyRepository extends JpaRepository<Counterparty, Integer> {
    @Query(nativeQuery = true, value = "SELECT * FROM counter_party " +
            "WHERE counter_party_id IN" +
            "(SELECT counterparty_id FROM trades WHERE trade_id = :trade_id)")
    Counterparty getBondholder(int trade_id);

    @Query(nativeQuery = true, value = "SELECT * FROM counter_party ")
    List<Counterparty> getAllBondholder();

}
