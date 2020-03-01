import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { AppComponent } from './app.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';

import { ProjectInfoComponent } from './project-info/project-info.component';
import { AssignmentInfoComponent } from './assignment-info/assignment-info.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImportanrLinkComponent } from './importanr-link/importanr-link.component';
import { TechnicalSkillComponent } from './technical-skill/technical-skill.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	// { path: 'Home', component:AppComponent},
	{ path: 'Personal', component:PersonalDetailComponent},
	{ path: 'Educational', component:EducationalDetailsComponent},
	{ path: 'Technical' , component :TechnicalSkillComponent},
	{ path: 'Project' , component :ProjectInfoComponent},
	{ path: 'Assignment' , component :AssignmentInfoComponent},
	{ path: 'About' , component :AboutMeComponent},
	{ path: 'Links' , component :ImportanrLinkComponent},
	// { path: 'Home' , component :HomeComponent},
	{ path: '' , component :HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
