import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

  get email() {
    return localStorage.getItem('email');
  }

  setEmail(email: string) {
    localStorage.setItem('email', email);
  }
}
