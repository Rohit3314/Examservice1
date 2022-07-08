package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Exammodel;

@Repository
public interface Examinterface extends JpaRepository<Exammodel,Integer>
{

}
