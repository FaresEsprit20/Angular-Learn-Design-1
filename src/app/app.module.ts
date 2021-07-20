import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/ui/structure/navbar/navbar.component';
import { FooterComponent } from './template/ui/structure/footer/footer.component';
import { HomeComponent } from './template/ui/structure/home/home.component';
import { CoursesComponent } from './template/ui/pages/courses/courses.component';
import { CoursesDetailsComponent } from './template/ui/pages/courses-details/courses-details.component';
import { AnimationsComponent } from './template/ui/pages/animations/animations.component';
import { NotFoundComponent } from './core/guards/not-found/not-found.component';
import { SearchService } from './core/services/search.service';
import { SearchFilterPipe } from './core/pipes/SearchFilterPipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    CoursesDetailsComponent,
    AnimationsComponent,
    NotFoundComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
