package com.example.doodlebackend.entity;

import com.example.doodlebackend.service.UserService;
import com.google.cloud.firestore.annotation.DocumentId;
import org.springframework.cloud.gcp.data.firestore.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@Document(collectionName = "meetings")
public class Meeting {

    @DocumentId
    private String id;

    private String title;

    private Date dateTimeStart;

    private Date dateTimeEnd;

    private String location;

    private String description;

    private String owner;

    private List<String> participants;

    private Map<String, List<String>> votes;

    public Date getDateTimeStart() {
        return dateTimeStart;
    }

    public void setDateTimeStart(Date dateTimeStart) {
        this.dateTimeStart = dateTimeStart;
    }

    public Date getDateTimeEnd() {
        return dateTimeEnd;
    }

    public void setDateTimeEnd(Date dateTimeEnd) {
        this.dateTimeEnd = dateTimeEnd;
    }

    public Meeting() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getParticipants() {
        return participants;
    }

    public void setParticipants(List<String> participants) {
        this.participants = participants;
    }

    public String getOwner() {
        return owner;
    }

    public Map<String, List<String>> getVotes() {
        return votes;
    }

    public void setVotes(Map<String, List<String>> votes) {
        this.votes = votes;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    @Override
    public String toString() {
        return " Meeting{id: " + getId()
                + ", title: " + getTitle()
                + ", dateTimeStart: " + getDateTimeStart()
                + ", dateTimeEnd: " + getDateTimeEnd()
                + ", location: " + getLocation()
                + ", description: " + getDescription()
                + ", owner: " + getOwner().toString()
                + ", participants: " + getParticipants().toString()
                + ", votes: " + getVotes().toString()
                + "\n";
    }
}
