import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from "src/app/user/user.component";
import { HomeComponent } from "src/app/home/home.component";

const routes: Routes = [
  {path:"technology/:name",component:UserComponent},
  {path:"home", component:HomeComponent},
  {path:"",redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
