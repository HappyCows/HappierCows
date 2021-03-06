package edu.ucsb.cs156.happiercows.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.ucsb.cs156.happiercows.entities.User;
import edu.ucsb.cs156.happiercows.repositories.UserRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(description="User information (admin only)")
@RequestMapping(value="/api/admin/users", produces="application/json")
@RestController
public class UsersController extends ApiController {
    @Autowired
    UserRepository userRepository;

    @ApiOperation(value = "Get a list of all users")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping
    public ResponseEntity<Iterable<User>> users() {
        Iterable<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }
}