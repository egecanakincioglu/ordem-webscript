package com.ordem.repository;

import com.ordem.model.Json;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JsonRepository extends JpaRepository<Json, Long> {
}
