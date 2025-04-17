import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-resume-language-dialog',
  templateUrl: './resume-language-dialog.component.html',
  styleUrl: './resume-language-dialog.component.css',
  imports: [TranslateModule],
})
export class ResumeLanguageDialogComponent {
  constructor(public dialogRef: MatDialogRef<ResumeLanguageDialogComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
