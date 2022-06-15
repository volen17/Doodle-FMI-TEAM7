import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/components/homepage-component/homepage.component";
import {LoginPageComponent} from "./login/components/login-page/login-page.component";
import {SignUpPageComponent} from "./registration/components/sign-up-page/sign-up-page.component";
import {CreateDoodleComponent} from "./create-doodle/components/create-doodle/create-doodle.component";
import {ViewDoodleComponent} from "./view-doodle/components/view-doodle/view-doodle.component";
import {ViewDoodlesComponent} from "./view-doodles/components/view-doodles/view-doodles.component";


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: SignUpPageComponent },
  { path: 'new-doodle', component: CreateDoodleComponent },
  {
    path: 'doodles',
    children: [
      {
        path: ':id',
        component: ViewDoodleComponent
      },
      {
        path: '',
        component: ViewDoodlesComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
