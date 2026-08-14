import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTab } from './contact-tab';

describe('ContactTab', () => {
  let component: ContactTab;
  let fixture: ComponentFixture<ContactTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactTab],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
