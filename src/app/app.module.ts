import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/ui/structure/navbar/navbar.component';
import { FooterComponent } from './template/ui/structure/footer/footer.component';
import { HomeComponent } from './template/ui/structure/home/home.component';
import { CoursesComponent } from './template/ui/pages/courses/courses.component';
import { CoursesDetailsComponent } from './template/ui/pages/courses-details/courses-details.component';
import { AnimationsComponent } from './template/ui/pages/animations/animations.component';
import { NotFoundComponent } from './core/guards/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    CoursesDetailsComponent,
    AnimationsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
