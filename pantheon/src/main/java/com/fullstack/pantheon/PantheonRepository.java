package com.fullstack.pantheon;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PantheonRepository extends JpaRepository<Deity, String> {
    Deity findDeityByid(int id);

    String deleteDeityByid(int id);
}
