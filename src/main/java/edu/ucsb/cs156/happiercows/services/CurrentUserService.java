package edu.ucsb.cs156.happiercows.services;

import lombok.experimental.Delegate;

import java.util.Map;

import edu.ucsb.cs156.happiercows.entities.User;

public abstract class CurrentUserService {
  public abstract User get();

  public final boolean isLoggedIn() {
    return get() != null;
  }

}
