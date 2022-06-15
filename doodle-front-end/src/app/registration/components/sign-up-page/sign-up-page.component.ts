import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {DoodleApiService} from "../../../services/doodle.api.service";
import {LoadingService} from "../../../services/loading.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../services/localstorage.service";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  email: string | undefined;
  password: string | undefined;
  confirmedPassword: string | undefined;
  name: string | undefined;

  constructor(
    public doodleApiService: DoodleApiService,
    public loadingService: LoadingService,
    public localStorageService: LocalStorageService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  saveUser(event: Event) {
    event.preventDefault();

    if(this.email && this.password && this.confirmedPassword && this.name) {
      this.loadingService.start();
      this.doodleApiService.saveUser({
        email: this.email,
        password: this.password,
        confirmedPassword: this.confirmedPassword,
        name: this.name,
      }).subscribe({
        next: async (email) => {
        this.localStorageService.setEmail(email);
        await this.router.navigate([`doodles`]);
        this.loadingService.stop();
        // redirect
      },
        error: (err) => {
        this.loadingService.stop();
      }}
    );
    }
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
