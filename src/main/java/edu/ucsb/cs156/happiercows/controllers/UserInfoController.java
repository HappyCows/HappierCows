package edu.ucsb.cs156.happiercows.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.ucsb.cs156.happiercows.entities.User;

@RequestMapping("/api")
@RestController
public class UserInfoController extends ApiController {
  @PreAuthorize("hasRole('ROLE_USER')")
  @GetMapping("/currentUser")
  public User currentUser() {
    return super.currentUser();
  }
}
