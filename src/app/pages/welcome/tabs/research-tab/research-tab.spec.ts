import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchTab } from './research-tab';

describe('ResearchTab', () => {
  let component: ResearchTab;
  let fixture: ComponentFixture<ResearchTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchTab],
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
