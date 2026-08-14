import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTab } from './blog-tab';

describe('BlogTab', () => {
  let component: BlogTab;
  let fixture: ComponentFixture<BlogTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTab],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
