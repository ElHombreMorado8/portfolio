import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './sections/about/about.component';
import { ContactFormComponent } from './sections/contact-form/contact-form.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { DownloadCvComponent } from './sections/download-cv/download-cv.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, AboutComponent, ContactFormComponent, HeroComponent, ProjectsComponent, DownloadCvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  isDarkMode = false;
  isCollapsed = true;

  ngOnInit() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      this.isDarkMode = saved === 'dark';
      document.documentElement.setAttribute('data-theme', saved);
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }


}
