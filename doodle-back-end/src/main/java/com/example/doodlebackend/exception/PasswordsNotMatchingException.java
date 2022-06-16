package com.example.doodlebackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class PasswordsNotMatchingException extends RuntimeException{
    public PasswordsNotMatchingException() {
        super("Passwords not matching");
    }
}
