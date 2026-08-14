import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDev } from './software-dev';

describe('SoftwareDev', () => {
  let component: SoftwareDev;
  let fixture: ComponentFixture<SoftwareDev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDev],
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareDev);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
