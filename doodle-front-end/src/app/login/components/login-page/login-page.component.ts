import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {LoadingService} from "../../../services/loading.service";
import {DoodleApiService} from "../../../services/doodle.api.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../services/localstorage.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  email: string | undefined;
  password: string | undefined;

  constructor(
    public loadingService: LoadingService,
    public doodleApiService: DoodleApiService,
    public router: Router,
    public localStorageService: LocalStorageService,
  ) { }

  login(event: Event) {
    event.preventDefault();
    this.loadingService.start();
    if(this.email && this.password) {
      this.doodleApiService.login({
        email: this.email,
        password: this.password
      }).subscribe({
        next: async (email) => {
          this.localStorageService.setEmail(email);
          await this.router.navigate([`doodles`]);
          this.loadingService.stop();
        },
        error: (err) => {
          this.loadingService.stop();
        }
      })
    }
  }

  ngOnInit(): void {
  }


}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
