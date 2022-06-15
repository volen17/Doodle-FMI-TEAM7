import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDoodlesComponent } from './components/view-doodles/view-doodles.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    ViewDoodlesComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  exports: [
    ViewDoodlesComponent
  ]
})
export class ViewDoodlesModule { }
