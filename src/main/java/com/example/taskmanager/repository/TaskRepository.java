package com.example.taskmanager.repository;

import com.example.taskmanager.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Task, String> {
}