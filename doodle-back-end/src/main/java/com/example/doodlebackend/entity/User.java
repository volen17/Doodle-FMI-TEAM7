package com.example.doodlebackend.entity;

import com.example.doodlebackend.service.MeetingService;
import com.google.cloud.firestore.annotation.DocumentId;
import org.springframework.cloud.gcp.data.firestore.Document;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Document(collectionName = "users")
public class User {
    @DocumentId
    private String email;

    private String password;

    private String name;

    private List<String> ownedMeetings;

    private List<String> participatingMeetings;

    public User() {
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return this.name;
    }

    public String getPassword() {
        return this.password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }

    public List<String> getOwnedMeetings() {
        return ownedMeetings;
    }

    public void setOwnedMeetings(List<String> ownedMeetings) {
        this.ownedMeetings = ownedMeetings;
    }

    public List<String> getParticipatingMeetings() {
        return participatingMeetings;
    }

    public void setParticipatingMeetings(List<String> participatingMeetings) {
        this.participatingMeetings = participatingMeetings;
    }

    @Override
    public String toString() {
        return "User{email: " + getEmail()
                + ", name: " + getName()
                + ", password: " + getPassword()
                + ", ownedMeetings: " + getOwnedMeetings().toString()
                + ", participatingMeetings: " + getParticipatingMeetings().toString()
                + "\n";
    }
}
