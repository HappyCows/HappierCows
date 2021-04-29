package edu.ucsb.cs156.happiercows.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import edu.ucsb.cs156.happiercows.entities.User;
import edu.ucsb.cs156.happiercows.services.CurrentUserService;

public abstract class ApiController {
  @Autowired
  private CurrentUserService currentUserService;

  protected User currentUser() {
    return currentUserService.get();
  }
}
