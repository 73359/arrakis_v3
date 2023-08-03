package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BondServiceRepository extends JpaRepository<Trade, Integer> {

    @Query(nativeQuery = true, value = "select * from trades")
    List<Trade> getAllBondTrades();

//    @Query(nativeQuery = true, value = "select * from dogs where name = :#{#dog.name}")
//    List<Dog> findByName(@Param("dog") Dog dog);

//    @Query(nativeQuery = true, value = "insert into dogs (dogs_id, name, age) " +
//            "values (" +
//            ":#{#dog.id}, " +
//            ":#{#dog.name}, " +
//            ":#{#dog.age})"
//    )
//    Dog save(@Param("dog") Dog theDog );
}
