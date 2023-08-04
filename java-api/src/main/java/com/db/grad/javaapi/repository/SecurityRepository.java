package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Security;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SecurityRepository extends JpaRepository<Security, Integer> {

    @Query(nativeQuery = true, value = "SELECT * FROM SECURITY WHERE status = 'active'")
    List<Security> getActiveBonds();

    @Query(nativeQuery = true, value = "SELECT * FROM SECURITY WHERE maturity_date BETWEEN " +
            "CURRENT_DATE - INTERVAL '5' DAY AND CURRENT_DATE + INTERVAL '5' DAY")
    List<Security> getBondsDueToMature();

    @Query(nativeQuery = true, value = "SELECT DISTINCT s.* FROM security s " +
            "JOIN trades t ON s.security_id = t.security_id " +
            "JOIN book_users bu ON t.book_id = bu.book_id " +
            "JOIN users u ON bu.user_id = u.user_id " +
            "WHERE u.user_id = :user_id")
    List<Security> getBondsFromResponsibleBooks(String user_id);
}
