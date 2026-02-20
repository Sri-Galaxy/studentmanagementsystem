package com.example.student.controller;

import com.example.student.model.Student;
import com.example.student.model.FullTimeStudent;
import com.example.student.model.PartTimeStudent;
import com.example.student.service.StudentService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    // View All Students
    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }

    // Add Full-Time Student
    @PostMapping("/fulltime")
    public ResponseEntity<FullTimeStudent> addFullTimeStudent(
        @jakarta.validation.Valid @RequestBody FullTimeStudent student) {
        FullTimeStudent savedStudent = (FullTimeStudent) service.saveStudent(student);
        return ResponseEntity.ok(savedStudent);
    }

    // Add Part-Time Student
    @PostMapping("/parttime")
    public ResponseEntity<PartTimeStudent> addPartTimeStudent(
        @jakarta.validation.Valid @RequestBody PartTimeStudent student) {
        PartTimeStudent savedStudent = (PartTimeStudent) service.saveStudent(student);
        return ResponseEntity.ok(savedStudent);
    }

    // Delete Student
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Long id) {
        service.deleteStudent(id);
        return ResponseEntity.ok("Student deleted successfully!");
    }

    // Sort by ID
    @GetMapping("/sort/id")
    public List<Student> sortById() {
        return service.sortById();
    }

    // Sort by Date Of Joining
    @GetMapping("/sort/date")
    public List<Student> sortByDate() {
        return service.sortByDateOfJoining();
    }

    // Sort by First Name
    @GetMapping("/sort/name")
    public List<Student> sortByName() {
        return service.sortByFirstName();
    }
}
