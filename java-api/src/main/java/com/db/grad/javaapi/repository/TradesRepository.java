package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradesRepository extends JpaRepository<Trade, Integer> {
    @Query(nativeQuery = true, value = "SELECT * FROM trades t " +
            "WHERE security_id = :security_id " +
            "AND book_id IN " +
            "(SELECT book_id FROM book_users WHERE user_id LIKE :user_id)")
    List<Trade> getBondTrades(int security_id, String user_id);
}
