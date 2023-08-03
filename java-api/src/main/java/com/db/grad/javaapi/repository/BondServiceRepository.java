package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BondServiceRepository extends JpaRepository<Trade, Integer> {

    @Query(nativeQuery = true, value = "select * from trades where book_id in" +
            "(select book_id from book_users where user_id like :user_id)")
    List<Trade> getBondTradesForUser(int user_id);

    @Query(nativeQuery = true, value = "select * from trades where book_id in " +
            "(select book_id from book_users where user_id like :user_id) and security_id in " +
            "(select * from security where DATEDIFF(day, '2023-08-03', maturity_date) between 0 and 5)") //TODO
    List<Trade> getBondTradesDueToMature(int user_id);

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
