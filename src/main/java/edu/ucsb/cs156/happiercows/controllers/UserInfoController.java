package edu.ucsb.cs156.happiercows.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.ucsb.cs156.happiercows.entities.User;
import edu.ucsb.cs156.happiercows.models.CurrentUser;
import edu.ucsb.cs156.happiercows.services.CurrentUserService;

@Api(description="Current User Information")
@RequestMapping(value="/api/currentUser", produces="application/json")
@RestController
public class UserInfoController extends ApiController {
 
  @ApiOperation(value = "Get information about current user")
  @PreAuthorize("hasRole('ROLE_USER')")
  @GetMapping
  public CurrentUser getCurrentUser() {
    return super.getCurrentUser();
  }
}
