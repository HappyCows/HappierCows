package edu.ucsb.cs156.happiercows.services;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Slf4j
@Service
public class LogJobService {
  @Async
  @SneakyThrows
  public void performLog() {
    log.info("Log job started, sleeping for 10 seconds");
    Thread.sleep(Duration.ofSeconds(10).toMillis());
    log.info("Log job ended");
  }
}
