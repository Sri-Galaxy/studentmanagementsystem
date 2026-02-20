package com.example.student.service;

import com.example.student.model.Student;
import com.example.student.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Sort;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    // Save student
    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    // Get all students
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    // Delete student
    public void deleteStudent(Long id) {
    if (!repository.existsById(id)) {
        throw new RuntimeException("Student not found with id: " + id);
    }
    repository.deleteById(id);
    }


    // Sort by ID
    public List<Student> sortById() {
        return repository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    // Sort by Date Of Joining
    public List<Student> sortByDateOfJoining() {
        return repository.findAll(Sort.by(Sort.Direction.ASC, "dateOfJoining"));
    }

    // Sort by First Name
    public List<Student> sortByFirstName() {
        return repository.findAll(Sort.by(Sort.Direction.ASC, "firstName"));
    }
}
