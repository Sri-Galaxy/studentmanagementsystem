package com.example.student.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
@DiscriminatorValue("PART_TIME")
public class PartTimeStudent extends Student {

    private Integer hoursPerWeek;
}
