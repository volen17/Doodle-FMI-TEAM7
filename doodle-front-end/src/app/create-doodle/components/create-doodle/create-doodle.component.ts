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

  email= this.localStorageService.email;
  title: string | undefined;
  description: string | undefined;
  location: string | undefined;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

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
    if(!this.localStorageService.email) {
     this.router.navigate(['/login']);
    }
  }

  saveMeeting(event: Event) {
    event.preventDefault();

    if(this.title && this.range.value.start && this.range.value.end) {
      this.loadingService.start();
      this.doodleApiService.saveMeeting({
        email: this.email,
        title: this.title,
        description: this.description,
        location: this.location,
        startDate: this.range.value.start,
        endDate: this.range.value.end,
      }).subscribe({
        next: async (meeting) => {
          await this.router.navigate([`doodles`, meeting.id]);
          this.loadingService.stop();
        },
        error: (err) => {
          this.loadingService.stop();
        }}
      );
    }
  }
}
