package com.fullstack.pantheon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins  =  "http://localhost:3000")
public class PantheonController {
    @Autowired
    PantheonRepository repository;

    ArrayList<Deity> deities = new ArrayList<>();

    @PostMapping("/deity")
    public ResponseEntity<String> createDeity(@RequestBody Deity deity) {
        repository.save(deity);
        return ResponseEntity.status(HttpStatus.CREATED).body("Deity added: " + deity.getDeityName());
    }

    @GetMapping("/deities")
    public ResponseEntity<List<Deity>> getDeities() {
        return ResponseEntity.status(HttpStatus.OK).body(repository.findAll());
    }

    @GetMapping("/deity/{id}")
    public ResponseEntity<Deity> getDeityById(@PathVariable String id) {
        return ResponseEntity.status(HttpStatus.OK).body(repository.findDeityByid(Integer.parseInt(id)));
    }

    @DeleteMapping("/deity/{id}")
    @Transactional
    public ResponseEntity<String> deleteDeity(@PathVariable String id) {
        repository.deleteDeityByid(Integer.parseInt(id));
        return ResponseEntity.status(HttpStatus.OK).body("Deity with ID " + id + " has been deleted");
    }

}
