import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserprofiletamplateComponent } from './userprofiletamplate/userprofiletamplate.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"homepage",component:HomepageComponent},
{path:"userregistration",component:UserregistrationComponent },
{path:"user",component:UserprofiletamplateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
