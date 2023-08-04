package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Security;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SecurityRepository extends JpaRepository<Security, Integer> {

    @Query(nativeQuery = true, value = "SELECT * FROM SECURITY  WHERE status = 'active'")
    List<Security> getActiveBonds();
}
