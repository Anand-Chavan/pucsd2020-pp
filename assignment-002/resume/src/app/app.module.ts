import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
import { TechnicalSkillComponent } from './technical-skill/technical-skill.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { AssignmentInfoComponent } from './assignment-info/assignment-info.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImportanrLinkComponent } from './importanr-link/importanr-link.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailComponent,
    EducationalDetailsComponent,
    TechnicalSkillComponent,
    ProjectInfoComponent,
    AssignmentInfoComponent,
    AboutMeComponent,
    ImportanrLinkComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
