package com.example.doodlebackend.service;

import com.example.doodlebackend.entity.Meeting;
import com.example.doodlebackend.entity.NewMeeting;
import com.example.doodlebackend.entity.User;
import com.example.doodlebackend.entity.Vote;
import com.example.doodlebackend.exception.UserNotFoundException;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class MeetingService {

    @Autowired
    private Firestore dbFirestore;

    public String vote(Vote vote) throws ExecutionException, InterruptedException {
        dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("meetings").document(vote.getMeetingId());
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot documentSnapshot = future.get();

        Meeting meeting;

        if(documentSnapshot.exists()) {
            meeting = documentSnapshot.toObject(Meeting.class);
        } else {
            throw new UserNotFoundException();
        }

        meeting.getVotes().get(vote.getTime()).add(vote.getUserEmail());

        updateMeeting(meeting);

        return meeting.getId();

    }

    public Meeting saveMeeting(NewMeeting newMeeting) throws ExecutionException, InterruptedException {
        Map<String, List<String>> votes = new HashMap<>();
        SimpleDateFormat formatter = new SimpleDateFormat("E, dd MMM yyyy HH:mm:ss z");
        for(Date time : newMeeting.getTimes()) {
            votes.put(formatter.format(time), new ArrayList<>());
        }
        Meeting meeting = new Meeting();
        List<String> participants = new ArrayList<>();
        participants.add(newMeeting.getEmail());
        meeting.setOwner(newMeeting.getEmail());
        meeting.setTitle(newMeeting.getTitle());
        meeting.setLocation(newMeeting.getLocation());
        meeting.setDescription(newMeeting.getDescription());
        meeting.setDateTimeStart(newMeeting.getStartDate());
        meeting.setDateTimeEnd(newMeeting.getEndDate());
        meeting.setParticipants(participants);
        meeting.setDuration(newMeeting.getDuration());
        meeting.setVotes(votes);

        dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<DocumentReference> documentReference = dbFirestore.collection("meetings").add(meeting);
        meeting.setId(documentReference.get().getId());

        return meeting;
    }

    public Meeting getMeeting(String id) throws ExecutionException, InterruptedException {
        dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("meetings").document(id);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot documentSnapshot = future.get();

        Meeting meeting;

        if(documentSnapshot.exists()) {
            meeting = documentSnapshot.toObject(Meeting.class);
            return meeting;
        } else {
            throw new UserNotFoundException();
        }
    }

    public Meeting updateMeeting(Meeting meeting) {
        dbFirestore = FirestoreClient.getFirestore();
        dbFirestore.collection("meetings").document(meeting.getId()).set(meeting);
        return meeting;
    }

    public List<Meeting> getAllMeetings() throws ExecutionException, InterruptedException {
        dbFirestore = FirestoreClient.getFirestore();
        Iterable<DocumentReference> documentReference = dbFirestore.collection("meetings").listDocuments();
        Iterator<DocumentReference> iterator = documentReference.iterator();
        List<Meeting> meetings = new ArrayList<>();

        while(iterator.hasNext()) {
            DocumentReference temp = iterator.next();
            ApiFuture<DocumentSnapshot> future = temp.get();
            DocumentSnapshot documentSnapshot = future.get();
            Meeting meeting = documentSnapshot.toObject(Meeting.class);
            meetings.add(meeting);
        }

        return meetings;
    }

    public List<Meeting> getAllUserMeetings(String userId) throws ExecutionException, InterruptedException {
        dbFirestore = FirestoreClient.getFirestore();
        QuerySnapshot querySnapshot = dbFirestore.collection("meetings").whereEqualTo("owner", userId).get().get();
        List<Meeting> meetings = new ArrayList<>();

        for(DocumentSnapshot document: querySnapshot.getDocuments()) {
            Meeting meeting = document.toObject(Meeting.class);
            meetings.add(meeting);
        }

        return meetings;
    }

    public User getOwnerUser(Meeting meeting) throws ExecutionException, InterruptedException {
        UserService userService = new UserService();
        return userService.getUser(meeting.getOwner());
    }

    public List<User> getListOfParticipants(Meeting meeting) throws ExecutionException, InterruptedException {
        UserService userService = new UserService();
        List<User> participantsList = new ArrayList<>();
        for (String userEmail : meeting.getParticipants()) {
            participantsList.add(userService.getUser(userEmail));
        }
        return participantsList;
    }
}
