import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../../../registration/components/sign-up-page/sign-up-page.component";
import {ErrorStateMatcher} from "@angular/material/core";

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


  constructor() {
  }

  ngOnInit(): void {
  }

}
