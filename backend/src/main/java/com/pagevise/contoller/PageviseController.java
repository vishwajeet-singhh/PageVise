package com.pagevise.contoller;


import com.pagevise.BaseResposneDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PageviseController {

    @GetMapping("/get-status")
    @CrossOrigin(origins = "http://localhost:5173")
    public BaseResposneDto getStatus() {
        return new BaseResposneDto<>(
                "ok",
                "Any guess what it could be? and thsi response is going from the backend"
        );
    }
}
