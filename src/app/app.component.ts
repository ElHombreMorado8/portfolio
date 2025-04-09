import { Component } from '@angular/core';
import { AboutComponent } from './sections/about/about.component';
import { ContactFormComponent } from './sections/contact-form/contact-form.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [AboutComponent, ContactFormComponent, HeroComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
