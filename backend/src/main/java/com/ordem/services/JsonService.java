package com.ordem.services;

import com.ordem.model.Json;
import com.ordem.repository.JsonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@Service
public class JsonService {

    @Autowired
    private JsonRepository jsonRepository;

    @Autowired
    private ObjectMapper objectMapper = new ObjectMapper();

    public Json saveJsonData(String key, Object value) {
        ObjectNode jsonData = objectMapper.createObjectNode();
        jsonData.put(key, objectMapper.valueToTree(value));

        Json json = new Json();
        json.setData(jsonData);

        return jsonRepository.save(json);
    }

    public Json getJsonData(Long id) {
        return jsonRepository.findById(id).orElse(null);
    }
}
