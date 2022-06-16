import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDoodleComponent } from './components/create-doodle/create-doodle.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    CreateDoodleComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
  ],
  exports: [
    CreateDoodleComponent
  ]
})
export class CreateDoodleModule { }
