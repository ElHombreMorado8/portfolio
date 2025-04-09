import { Component } from '@angular/core';
import { ProjectSection } from '../..//models/project.model';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  experienceSections: ProjectSection[] = [
    {
      id: 1,
      year: 'Since 2021',
      role: 'Fullstack and Frontend Developer',
      description: 'My overall experience consists in:',
      items: [
        'Working closely with the backend teams',
        'Dealing with the whole lifecycle of a project from gathering requirements, design, implement and deploy to production',
        'Used to work with tight deadlines and under pressure',
        'Designing UI/UX, pixel perfect, bringing creative ideas',
        'Building APIs with several languages like python and node',
        'API, Cloud, Plug ins and databases management',
        'AI implementing',
        'Optimizing work time and code'
      ],
      languages: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Python',
        'Node.js',
        'Next.js',
        'React',
        'Angular',
        'Java',
        'C++',
        'PHP',
        'SQL',
        'NoSQL',
        'PostgreSQL',
        'MySQL',
      ],
    },
    {
      id: 2,
      year: 'Since 2021',
      role: 'Fullstack web Developer',
      items: [
        'Create clean and intuitive UI',
        'Develop robust and effective backend',
        'In charge of organization and documentation',
        'Design and implement complex report and ban system powered by AI',
      ],
      languages: [
        'TypeScript',
        'Next.js',
        'React',
      ],
    },
    {
      id: 3,
      year: '2022',
      role: 'Frontend Developer',
      items: [
        'Implementation of new features',
        'Code refactoring',
        'Bug fixing',
      ],
      languages: [
        'TypeScript',
        'TailwindCSS',
        'React.ts',
      ],
    },
    {
      id: 4,
      year: 'Since 2021',
      role: 'Fullstack mobile Developer',
      items: [
        'Develop new functions, test, depuration, maintain and publish app',
        'Integrate Firebase, Google Cloud and APIs',
        'Bringing up new exciting ideas',
        'AWS rekognition for image moderation',
        'OpenAI for text moderation',
      ],
      languages: [
        'Flutter',
        'Dart',
        'Javascript',
        'HTML',
      ],
    },
  ];
}
