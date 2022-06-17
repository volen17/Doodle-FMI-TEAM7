import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { Meeting } from 'src/app/models/Meeting';
import { DoodleApiService } from 'src/app/services/doodle.api.service';

@Component({
  selector: 'app-view-doodle',
  templateUrl: './view-doodle.component.html',
  styleUrls: ['./view-doodle.component.scss'],
})
export class ViewDoodleComponent implements OnInit {
  meeting: Meeting | undefined;
  meetingId: string | undefined;

  loading = false;

  constructor(
    route: ActivatedRoute,
    private readonly doodleService: DoodleApiService
  ) {
    this.meetingId = route.snapshot.paramMap.get('id') || '';
    this.getMeeting(this.meetingId);
  }

  ngOnInit(): void {}

  getMeeting(id: string) {
    this.loading = true;
    this.doodleService
      .getMeeting(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((response) => {
        console.log('opa');
        if (response) {
          this.meeting = response;
        }
      });
  }
}
