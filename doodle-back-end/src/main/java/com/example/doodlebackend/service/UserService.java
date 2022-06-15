package com.example.doodlebackend.service;

import com.example.doodlebackend.entity.Meeting;
import com.example.doodlebackend.entity.User;
import com.example.doodlebackend.exception.UserNotFoundException;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class UserService {

    @Autowired
    private Firestore dbFirestore;

    public User saveUser(User user) throws ExecutionException, InterruptedException {
        dbFirestore = FirestoreClient.getFirestore();
        if(dbFirestore.collection("users").document(user.getEmail()).get().get().contains("password")) {
            return user;
        }
        dbFirestore.collection("users").document(user.getEmail()).set(user);
        return user;
    }

    public User getUser(String email) throws UserNotFoundException, ExecutionException, InterruptedException {
        dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("users").document(email);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot documentSnapshot = future.get();

        User user;

        if(documentSnapshot.exists()) {
            user = documentSnapshot.toObject(User.class);
            return user;
        } else {
            throw new UserNotFoundException();
        }
    }

    public User updateUser(User user) {
        dbFirestore = FirestoreClient.getFirestore();
        dbFirestore.collection("users").document(user.getEmail()).set(user);
        return user;
    }

    public List<User> getAllUsers() throws ExecutionException, InterruptedException {
        dbFirestore = FirestoreClient.getFirestore();
        Iterable<DocumentReference> documentReference = dbFirestore.collection("users").listDocuments();
        Iterator<DocumentReference> iterator = documentReference.iterator();
        List<User> users = new ArrayList<>();

        while(iterator.hasNext()) {
            DocumentReference temp = iterator.next();
            ApiFuture<DocumentSnapshot> future = temp.get();
            DocumentSnapshot documentSnapshot = future.get();
            User user = documentSnapshot.toObject(User.class);
            users.add(user);
        }

        return users;
    }

    public List<Meeting> getListOfOwnedMeetings(User user) throws ExecutionException, InterruptedException {
        MeetingService meetingService = new MeetingService();
        List<Meeting> ownedMeetingsList = new ArrayList<>();
        for (String meetingId : user.getOwnedMeetings()) {
            ownedMeetingsList.add(meetingService.getMeeting(meetingId));
        }
        return ownedMeetingsList;
    }

    public List<Meeting> getListOfParticipatingMeetings(User user) throws ExecutionException, InterruptedException {
        MeetingService meetingService = new MeetingService();
        List<Meeting> participatingMeetingsList = new ArrayList<>();
        for (String meetingId : user.getParticipatingMeetings()) {
            participatingMeetingsList.add(meetingService.getMeeting(meetingId));
        }
        return participatingMeetingsList;
    }
}
