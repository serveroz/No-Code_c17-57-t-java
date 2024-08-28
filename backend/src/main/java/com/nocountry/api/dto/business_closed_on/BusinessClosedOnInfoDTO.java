package com.nocountry.api.dto.business_closed_on;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BusinessClosedOnInfoDTO {
    @NotBlank
    private Long businessId;
    @NotBlank
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate date;
    @JsonFormat(pattern="HH:mm:ss")
    private LocalTime fromHour;
    @JsonFormat(pattern="HH:mm:ss")
    private LocalTime toHour;
}
