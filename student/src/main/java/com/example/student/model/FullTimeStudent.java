package com.example.student.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
@DiscriminatorValue("FULL_TIME")
public class FullTimeStudent extends Student {

    private Double stipend;
}
