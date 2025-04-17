import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './sections/about/about.component';
import { ContactFormComponent } from './sections/contact-form/contact-form.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { DownloadCvComponent } from './sections/download-cv/download-cv.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    AboutComponent,
    ContactFormComponent,
    HeroComponent,
    ProjectsComponent,
    DownloadCvComponent,
    MatDialogModule,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  isDarkMode = false;
  isCollapsed = true;

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'en';
    translate.setDefaultLang('en');
    translate.use(savedLang);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

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
