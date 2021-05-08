package edu.ucsb.cs156.happiercows.controllers;

import edu.ucsb.cs156.happiercows.ControllerTestCase;
import edu.ucsb.cs156.happiercows.controllers.CommonsController;
import edu.ucsb.cs156.happiercows.repositories.UserRepository;
import edu.ucsb.cs156.happiercows.repositories.CommonsRepository;
import edu.ucsb.cs156.happiercows.entities.Commons;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.http.MediaType;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import org.springframework.beans.factory.annotation.Autowired;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.fasterxml.jackson.databind.ObjectMapper;


@WebMvcTest(controllers = CommonsController.class)
public class CommonsControllerTests extends ControllerTestCase {

  @MockBean
  UserRepository userRepository;

  @MockBean
  CommonsRepository commonsRepository;

  @Autowired
    private ObjectMapper objectMapper;

  @WithMockUser(roles={"ADMIN"})
  @Test
  public void currentUser__logged_in() throws Exception {
    Commons expectedCommons = Commons.builder().name("TestCommons").build();
    ObjectMapper mapper = new ObjectMapper();
    String requestBody = mapper.writeValueAsString(expectedCommons);
    when(commonsRepository.save(any())).thenReturn(expectedCommons);

    MvcResult response = mockMvc
    .perform(post("/api/commons/new?name=TestCommons").with(csrf()).contentType(MediaType.APPLICATION_JSON)
    .characterEncoding("utf-8").content(requestBody))
    .andExpect(status().isOk()).andReturn();

    verify(commonsRepository, times(1)).save(expectedCommons);

    String responseString = response.getResponse().getContentAsString();
    Commons actualCommons = objectMapper.readValue(responseString, Commons.class);
    assertEquals(actualCommons, expectedCommons);
  }
}
