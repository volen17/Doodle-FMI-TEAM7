package com.example.doodlebackend.common;

import com.example.doodlebackend.entity.Meeting;
import com.example.doodlebackend.entity.User;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

public class UserDocument {
    private List<DocumentReference> userListDocumentReferences;

    public List<User> getMeetings() throws ExecutionException, InterruptedException {
        List<User> users = new ArrayList<>();
        for (DocumentReference userDocRef : userListDocumentReferences) {
            ApiFuture<DocumentSnapshot> future = userDocRef.get();
            DocumentSnapshot documentSnapshot = future.get();
            User user = documentSnapshot.toObject(User.class);
            users.add(user);
        }
        return users;
    }
}
