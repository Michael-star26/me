import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuarialTab } from './actuarial-tab';

describe('ActuarialTab', () => {
  let component: ActuarialTab;
  let fixture: ComponentFixture<ActuarialTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActuarialTab],
    }).compileComponents();

    fixture = TestBed.createComponent(ActuarialTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
