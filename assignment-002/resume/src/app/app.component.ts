import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'resume';
  navLinks=['personal_info','educational_info','technical-skill','project_info','assignment_info','about_me','important_link'];
  navNames=['Personal','Educational','Technical','Project','Assignment','About','Links',]
}
