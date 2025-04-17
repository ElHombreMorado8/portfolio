import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeLanguageDialogComponent } from '../../resume-language-dialog/resume-language-dialog.component';

@Component({
  selector: 'app-download-cv',
  templateUrl: './download-cv.component.html',
  styleUrls: ['./download-cv.component.css'],
})
export class DownloadCvComponent {
  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ResumeLanguageDialogComponent);
  }
}
