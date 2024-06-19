package com.ordem.repository;

import com.ordem.model.VisitorCount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitorCountRepository extends JpaRepository<VisitorCount, Long> {

}
