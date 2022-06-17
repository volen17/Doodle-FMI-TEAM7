import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ViewDoodleComponent } from './components/view-doodle/view-doodle.component';

@NgModule({
  declarations: [ViewDoodleComponent],
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
})
export class ViewDoodleModule {}
