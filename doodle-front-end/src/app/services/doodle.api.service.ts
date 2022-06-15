import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginUser, User} from "../models/User";

const SEPARATOR = '/';

@Injectable({
  providedIn: 'root',
})
export class DoodleApiService {

  private readonly _url = 'http://localhost:8080';

  constructor(private readonly httpClient: HttpClient) {
  }

  public saveUser(user: User) {
    return this.httpClient.post(this._url + SEPARATOR + 'users', user, {responseType: 'text'});
  }

  public login(loginUser: LoginUser) {
    return this.httpClient.post(this._url + SEPARATOR + 'users' + SEPARATOR + 'login', loginUser, {responseType: 'text'})
  }
}
