import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLanguageDialogComponent } from './resume-language-dialog.component';

describe('ResumeLanguageDialogComponent', () => {
  let component: ResumeLanguageDialogComponent;
  let fixture: ComponentFixture<ResumeLanguageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeLanguageDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeLanguageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
