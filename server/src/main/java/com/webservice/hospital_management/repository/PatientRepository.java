package com.webservice.hospital_management.repository;


import com.webservice.hospital_management.entity.Patient;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface PatientRepository extends CrudRepository<Patient,Integer> {
    
}
