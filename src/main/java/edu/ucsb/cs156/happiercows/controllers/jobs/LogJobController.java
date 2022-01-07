package edu.ucsb.cs156.happiercows.controllers.jobs;

import edu.ucsb.cs156.happiercows.services.LogJobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogJobController extends JobController {
  @Autowired
  private LogJobService logJob;

  @PostMapping("/log")
  public String log() {
    logJob.performLog();
    return "cool";
  }
}
