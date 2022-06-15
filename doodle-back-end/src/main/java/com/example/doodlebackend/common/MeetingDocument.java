package com.example.doodlebackend.common;

import com.example.doodlebackend.entity.Meeting;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

public class MeetingDocument {
    private List<DocumentReference> meetingListDocumentReferences;

    public List<Meeting> getMeetings() throws ExecutionException, InterruptedException {
        List<Meeting> meetings = new ArrayList<>();
        for (DocumentReference meetingDocRef : meetingListDocumentReferences) {
            ApiFuture<DocumentSnapshot> future = meetingDocRef.get();
            DocumentSnapshot documentSnapshot = future.get();
            Meeting meeting = documentSnapshot.toObject(Meeting.class);
            meetings.add(meeting);
        }
        return meetings;
    }
}
