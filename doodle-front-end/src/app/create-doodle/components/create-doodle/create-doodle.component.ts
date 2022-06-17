import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../../../registration/components/sign-up-page/sign-up-page.component";
import {ErrorStateMatcher} from "@angular/material/core";
import {DoodleApiService} from "../../../services/doodle.api.service";
import {LoadingService} from "../../../services/loading.service";
import {LocalStorageService} from "../../../services/localstorage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-doodle',
  templateUrl: './create-doodle.component.html',
  styleUrls: ['./create-doodle.component.scss']
})
export class CreateDoodleComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  titleFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  email: string | undefined;
  name: string | undefined;
  title: string | undefined;
  description: string | undefined;
  location: string | undefined;
  range: any;

  nowDate: Date;
  startDate: Date | undefined;
  endDate: Date | undefined;

  constructor(public doodleApiService: DoodleApiService,
              public loadingService: LoadingService,
              public localStorageService: LocalStorageService,
              public router: Router,) {
    this.nowDate = new Date();
  }

  ngOnInit(): void {
  }
  //
  // saveMeeting(event: Event) {
  //   event.preventDefault();
  //
  //   if(this.email && this.name && this.title) {
  //     this.loadingService.start();
  //     this.doodleApiService.saveMeeting({
  //       owner: this.email,
  //     }).subscribe({
  //       next: async (email) => {
  //         this.localStorageService.setEmail(email);
  //         await this.router.navigate([`doodle/${(this.id)}`]);
  //         this.loadingService.stop();
  //         // redirect
  //       },
  //       error: (err) => {
  //         this.loadingService.stop();
  //       }}
  //     );
  //   }
  // }
}
