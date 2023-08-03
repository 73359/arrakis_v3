package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BondServiceRepository extends JpaRepository<Trade, Integer> {

    @Query(nativeQuery = true, value = "select * from trades where book_id in" +
            "(select book_id from book_users where user_id like :user_id)")
    List<Trade> getBondTradesForUser(String user_id);

    @Query(nativeQuery = true, value = "SELECT * FROM Trades t " +
            "JOIN book_users bu ON t.book_id = bu.book_id " +
            "JOIN users u ON bu.user_id = u.user_id " +
            "JOIN security s ON t.security_id = s.security_id " +
            "WHERE u.user_id = :user_id " +
            "AND s.maturity_date BETWEEN " +
            "CURRENT_DATE + INTERVAL '5' DAY AND CURRENT_DATE + INTERVAL '10' DAY")
    List<Trade> getBondTradesDueToMature(@Param("user_id") String userId);

    @Query(nativeQuery = true, value = "SELECT * FROM Trades t " +
            "JOIN book_users bu ON t.book_id = bu.book_id " +
            "JOIN users u ON bu.user_id = u.user_id " +
            "WHERE u.user_id = :user_id " +
            "AND t.trade_settlement_date < CURRENT_DATE")
    List<Trade> getBondTradesNotSettled(@Param("user_id") String userId);
}
