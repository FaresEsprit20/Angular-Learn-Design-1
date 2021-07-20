import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/guards/not-found/not-found.component';
import { AnimationsComponent } from './template/ui/pages/animations/animations.component';
import { CoursesDetailsComponent } from './template/ui/pages/courses-details/courses-details.component';
import { CoursesComponent } from './template/ui/pages/courses/courses.component';
import { LoginComponent } from './template/ui/pages/login/login.component';
import { SignupComponent } from './template/ui/pages/signup/signup.component';
import { HomeComponent } from './template/ui/structure/home/home.component';


const routes: Routes = [
{
  path: '',
  component: HomeComponent
},  
{
  path:'login',
  component: LoginComponent
},
{
  path:'signup',
  component: SignupComponent
},
{
  path: 'courses',
  component: CoursesComponent
},
{
  path: 'courses/details/:id',
  component: CoursesDetailsComponent
},  
{
  path: 'animations',
  component: AnimationsComponent
},
{ path: 'not-found', 
  component: NotFoundComponent },
{ 
  path: '**',
   redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
