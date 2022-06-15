import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isCreateDoodleOpened = false;
  isLoggedIn = false;

  constructor(
    private router: Router,
  ) { }

  async navigate(url: string) {
    return this.router.navigate([url]);
  }

  ngOnInit(): void {
  }
}
