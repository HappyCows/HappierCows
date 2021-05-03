package edu.ucsb.cs156.happiercows.entities;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.AccessLevel;

import java.util.List;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity(name = "commons")
public class Commons {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;  
  private String name;

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(name = "user_commons", 
    joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), 
    inverseJoinColumns = @JoinColumn(name = "commons_id", referencedColumnName = "id"))
  private List<User> users;
}
