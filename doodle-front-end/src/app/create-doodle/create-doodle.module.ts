import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDoodleComponent } from './components/create-doodle/create-doodle.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    CreateDoodleComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    CreateDoodleComponent
  ]
})
export class CreateDoodleModule { }
