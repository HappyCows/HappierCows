package edu.ucsb.cs156.happiercows.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.ucsb.cs156.happiercows.entities.Commons;
import edu.ucsb.cs156.happiercows.repositories.CommonsRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Api(description = "Commons")
@RequestMapping("/api/commons")
@RestController
public class CommonsController extends ApiController {
    @Autowired
    CommonsRepository commonsRepository;

    @Autowired
    ObjectMapper mapper;

    @ApiOperation(value = "Get a list of all commons")
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("")
    public ResponseEntity<String> getCommons() throws JsonProcessingException {
        Iterable<Commons> users = commonsRepository.findAll();
        String body = mapper.writeValueAsString(users);
        return ResponseEntity.ok().body(body);
    }

    @ApiOperation(value = "Create a new commons")
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping(value = "/new", produces = "application/json")
    public ResponseEntity<String> createCommons(@ApiParam("name of commons") @RequestParam String name)
            throws JsonProcessingException {
        log.info("name={}", name);
        Commons c = Commons.builder().name(name).build();
        Commons savedCommons = commonsRepository.save(c);
        String body = mapper.writeValueAsString(savedCommons);
        log.info("body={}", body);
        return ResponseEntity.ok().body(body);
    }
}