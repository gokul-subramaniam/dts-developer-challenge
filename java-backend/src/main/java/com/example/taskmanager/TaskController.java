package com.example.taskmanager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tasks")
public class TaskController {

  @Autowired
  private TaskRepository repository;

  @GetMapping
  public List<Task> getAllTasks() {
    return repository.findAll();
  }

  @GetMapping("/{id}")
  public Task getTask(@PathVariable Long id) {
    return repository.findById(id).orElseThrow();
  }

  @PostMapping
  public Task createTask(@RequestBody Task task) {
    return repository.save(task);
  }

  @PutMapping("/{id}")
  public Task updateStatus(@PathVariable Long id, @RequestBody Task update) {
    Task task = repository.findById(id).orElseThrow();
    task.setStatus(update.getStatus());
    return repository.save(task);
  }

  @DeleteMapping("/{id}")
  public void deleteTask(@PathVariable Long id) {
    repository.deleteById(id);
  }
}
