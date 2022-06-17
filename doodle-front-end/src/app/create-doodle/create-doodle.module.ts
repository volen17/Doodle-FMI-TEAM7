import { NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateDoodleComponent } from './components/create-doodle/create-doodle.component';

@NgModule({
  declarations: [CreateDoodleComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgxMatTimepickerModule,
  ],
  exports: [CreateDoodleComponent],
})
export class CreateDoodleModule {}
