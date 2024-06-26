import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting, NewMeeting } from '../models/Meeting';
import { LoginUser, User } from '../models/User';

const SEPARATOR = '/';

@Injectable({
  providedIn: 'root',
})
export class DoodleApiService {
  private readonly _url = 'http://localhost:8080';

  constructor(private readonly httpClient: HttpClient) {}

  public saveUser(user: User) {
    return this.httpClient.post(this._url + SEPARATOR + 'users', user, {
      responseType: 'text',
    });
  }

  public login(loginUser: LoginUser) {
    return this.httpClient.post(
      this._url + SEPARATOR + 'users' + SEPARATOR + 'login',
      loginUser,
      { responseType: 'text' }
    );
  }

  public getUserMeetings(userEmail: string) {
    return this.httpClient.get<Meeting[]>(
      this._url + SEPARATOR + 'meetings' + SEPARATOR
    );
  }

  public getMeeting(meetingId: string): Observable<Meeting> {
    return this.httpClient.get<Meeting>(
      this._url + SEPARATOR + 'meetings' + SEPARATOR + meetingId
    );
  }

  public saveMeeting(meeting: NewMeeting) {
    return this.httpClient.post<Meeting>(
      this._url + SEPARATOR + 'meetings',
      meeting
    );
  }

  public vote(time: string, meetingId: string, userEmail: string) {
    return this.httpClient.put(this._url + SEPARATOR + 'meetings' + SEPARATOR +  'vote', {
      time,
      meetingId,
      userEmail,
    },
    { responseType: 'text' })
  }
}
