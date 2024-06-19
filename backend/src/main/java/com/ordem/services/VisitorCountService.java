package com.ordem.services;

import com.ordem.model.VisitorCount;
import com.ordem.repository.VisitorCountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.util.Optional;

@Service
public class VisitorCountService {

    @Autowired
    private VisitorCountRepository visitorCountRepository;

    private long visitorCount = 0;

    @PostConstruct
    public void init() {
        Optional<VisitorCount> count = visitorCountRepository.findById(1L);
        if (count.isPresent()) {
            this.visitorCount = count.get().getCount();
        } else {
            this.visitorCount = 0;
        }
    }

    public void incrementVisitorCount() {
        visitorCount++;
        VisitorCount count = new VisitorCount();
        count.setId(1L);
        count.setCount(visitorCount);
        visitorCountRepository.save(count);
    }

    public long getVisitorCount() {
        return visitorCount;
    }
}
