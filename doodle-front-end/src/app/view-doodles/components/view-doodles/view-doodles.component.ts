import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from '../../../models/Meeting';
import { DoodleApiService } from '../../../services/doodle.api.service';
import { LoadingService } from '../../../services/loading.service';
import { LocalStorageService } from '../../../services/localstorage.service';

@Component({
  selector: 'app-view-doodles',
  templateUrl: './view-doodles.component.html',
  styleUrls: ['./view-doodles.component.scss'],
})
export class ViewDoodlesComponent implements OnInit {
  meetings: Meeting[] | undefined;
  constructor(
    public doodleApiService: DoodleApiService,
    public loadingService: LoadingService,
    public localStorageService: LocalStorageService,
    public router: Router
  ) {}

  async ngOnInit() {
    const email = this.localStorageService.email;
    if (email) {
      this.getMeetings(email);
    } else {
      await this.router.navigate(['/']);
    }
  }

  getMeetings(email: string) {
    this.loadingService.start();
    this.doodleApiService.getUserMeetings(email).subscribe({
      next: (meetings) => {
        this.meetings = meetings;
        this.loadingService.stop();
      },
      error: () => {
        this.loadingService.stop();
      },
    });
  }
  async navigateTo(meetingId: string) {
    await this.router.navigate(['doodles', meetingId]);
  }
}
