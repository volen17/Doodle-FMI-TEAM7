import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToolbarModule} from "./toolbar/toolbar.module";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HomepageModule} from "./homepage/homepage.module";
import {RegistrationModule} from "./registration/registration.module";
import {LoginModule} from "./login/login.module";
import { HttpClientModule } from '@angular/common/http';
import {ViewDoodlesModule} from "./view-doodles/view-doodles.module";
import {CreateDoodleModule} from "./create-doodle/create-doodle.module";
import {ViewDoodleModule} from "./view-doodle/view-doodle.module";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ToolbarModule,
        NoopAnimationsModule,
        HomepageModule,
        RegistrationModule,
        LoginModule,
        ViewDoodlesModule,
        HttpClientModule,
        CreateDoodleModule,
        ViewDoodlesModule,
        ViewDoodleModule,
      MatDatepickerModule,
      MatNativeDateModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
