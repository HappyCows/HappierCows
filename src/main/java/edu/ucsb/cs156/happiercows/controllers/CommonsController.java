package edu.ucsb.cs156.happiercows.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import edu.ucsb.cs156.happiercows.entities.Commons;
import edu.ucsb.cs156.happiercows.repositories.CommonsRepository;
import edu.ucsb.cs156.happiercows.repositories.UserCommonsRepository;
import edu.ucsb.cs156.happiercows.repositories.UserRepository;
import edu.ucsb.cs156.happiercows.entities.User;
import edu.ucsb.cs156.happiercows.entities.UserCommons;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Api(description = "Commons")
@RequestMapping(value="/api/commons", produces="application/json")
@RestController
public class CommonsController extends ApiController {
  @Autowired
  private CommonsRepository commonsRepository;
  @Autowired
  private UserRepository userRepository;
  @Autowired
  private UserCommonsRepository userCommonsRepository;

  @ApiOperation("Get a list of all commons")
  @PreAuthorize("hasRole('ROLE_USER')")
  @GetMapping
  public ResponseEntity<Iterable<Commons>> getCommons() {
    log.info("getCommons()...");
    Iterable<Commons> users = commonsRepository.findAll();
    return ResponseEntity.ok(users);
  }

  @ApiOperation("Create a new commons")
  @PreAuthorize("hasRole('ROLE_ADMIN')")
  @PostMapping("/new")
  public ResponseEntity<Commons> createCommons(@ApiParam("name of commons") @RequestParam String name) {
    log.info("name={}", name);
    Commons c = Commons.builder().name(name).build();
    Commons savedCommons = commonsRepository.save(c);
    log.info("body={}", savedCommons);
    return ResponseEntity.ok(savedCommons);
  }

  @ApiOperation("Join a common")
  @PreAuthorize("hasRole('ROLE_USER')")
  @PostMapping("/join/{commonsId}")
  public ResponseEntity<Commons> joinCommon(@PathVariable("commonsId") Long commonsId) throws Exception {
    Optional<Commons> c = commonsRepository.findById(commonsId);
    Commons commons = c.orElseThrow(() -> new Exception("Commons not found."));

    User u = getUser();
    commons.getUsers().add(u);

    Commons savedCommons = commonsRepository.save(commons);
    return ResponseEntity.ok(savedCommons);
  }

  @ApiOperation("Delete a user from a commons")
  @PreAuthorize("hasRole('ROLE_ADMIN')")
  @DeleteMapping("/{commonsId}/users/{userId}")
  public ResponseEntity<Commons> deleteUserFromCommon(@PathVariable("commonsId") Long commonsId, @PathVariable("userId") Long userId) throws Exception{

    Optional<UserCommons> uc = userCommonsRepository.findByCommonsIdAndUserId(commonsId, userId);
    UserCommons userCommons = uc.orElseThrow(() -> new Exception(String.format("UserCommons with commonsId=%d and userId=%d not found.",commonsId, userId)));
   
    userCommonsRepository.deleteById(userCommons.getId()); 
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

  }
}