package com.example.taskmanager;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Task {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String title;
  private String description;
  private String status;
  private LocalDateTime dueDate;

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }

  public String getTitle() { return title; }
  public void setTitle(String title) { this.title = title; }

  public String getDescription() { return description; }
  public void setDescription(String description) { this.description = description; }

  public String getStatus() { return status; }
  public void setStatus(String status) { this.status = status; }

  public LocalDateTime getDueDate() { return dueDate; }
  public void setDueDate(LocalDateTime dueDate) { this.dueDate = dueDate; }
}
