import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTab } from './cv-tab';

describe('CvTab', () => {
  let component: CvTab;
  let fixture: ComponentFixture<CvTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvTab],
    }).compileComponents();

    fixture = TestBed.createComponent(CvTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
