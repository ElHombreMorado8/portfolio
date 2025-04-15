import { Component, Input } from '@angular/core';
import { ProjectSection } from '../../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  @Input() data!: ProjectSection;
}
