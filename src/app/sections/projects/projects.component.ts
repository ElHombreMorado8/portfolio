import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ProjectSection } from '../../models/project.model';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit, OnDestroy {
  experienceSections: ProjectSection[] = [];
  private langChangeSub!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadSections();

    // Re-fetch sections when language changes
    this.langChangeSub = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.loadSections();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }

  private loadSections(): void {
    this.translate
      .get('PROJECTS.SECTIONS')
      .subscribe((sections: ProjectSection[]) => {
        this.experienceSections = sections;
      });
  }
}
