import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { finalize } from 'rxjs';
import { Meeting } from 'src/app/models/Meeting';
import { DoodleApiService } from 'src/app/services/doodle.api.service';
import {LocalStorageService} from "../../../services/localstorage.service";

@Component({
  selector: 'app-view-doodle',
  templateUrl: './view-doodle.component.html',
  styleUrls: ['./view-doodle.component.scss'],
})
export class ViewDoodleComponent implements OnInit {
  meeting: Meeting | undefined;
  meetingId: string | undefined;
  email: string | null = null;

  participants: string[] = [];

  loading = false;

  times: string[] = [];

  constructor(
    route: ActivatedRoute,
    private readonly doodleService: DoodleApiService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {
    this.meetingId = route.snapshot.paramMap.get('id') || '';
    this.getMeeting(this.meetingId);
  }

  async ngOnInit() {
    this.email = this.localStorageService.email;
    if(!this.email) {
    await this.router.navigate(['login']);
    }
  }

  getMeeting(id: string) {
    this.loading = true;
    this.doodleService
      .getMeeting(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((response) => {
        if (response) {
          this.meeting = response;
          this.times=Object.keys(this.meeting.votes);
          this.participants = this.meeting.participants;

        }
      });
  }

  async placeVote(time: string) {
    if(this.email && this.meetingId) {
      this.doodleService.vote(time, this.meetingId, this.email).subscribe( () => {
        window.location.reload();
        }
      );
    }
  }
}
