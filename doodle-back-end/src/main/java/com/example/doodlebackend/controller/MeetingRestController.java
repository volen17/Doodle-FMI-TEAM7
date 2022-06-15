package com.example.doodlebackend.controller;

import com.example.doodlebackend.entity.Meeting;
import com.example.doodlebackend.entity.User;
import com.example.doodlebackend.service.MeetingService;
import com.example.doodlebackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/meetings")
public class MeetingRestController {

    @Autowired
    private MeetingService meetingService;

    @PostMapping()
    @CrossOrigin
    public ResponseEntity<Meeting> saveMeeting(@RequestBody Meeting meeting) throws ExecutionException, InterruptedException {
        return new ResponseEntity<>(meetingService.saveMeeting(meeting), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<Meeting> getMeeting(@PathVariable String id) throws ExecutionException, InterruptedException {
        return new ResponseEntity<>(meetingService.getMeeting(id), HttpStatus.OK);
    }

    @GetMapping()
    @CrossOrigin
    public ResponseEntity<List<Meeting>> getAllUserMeetings(@RequestParam String userEmail) throws ExecutionException, InterruptedException {
        return new ResponseEntity<>(meetingService.getAllUserMeetings(userEmail), HttpStatus.OK);
    }
}
