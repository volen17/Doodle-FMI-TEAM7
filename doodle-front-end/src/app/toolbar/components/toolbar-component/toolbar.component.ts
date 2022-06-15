import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../services/localstorage.service";
import {BehaviorSubject} from "rxjs";
import {LoadingService} from "../../../services/loading.service";

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isCreateDoodleOpened = false;

  constructor(
    private router: Router,
    public localStorageService: LocalStorageService,
  ) { }

  async navigate(url: string) {
    return this.router.navigate([url]);
  }



  ngOnInit(): void {
  }
}
