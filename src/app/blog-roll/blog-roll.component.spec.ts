import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRollComponent } from './blog-roll.component';

describe('BlogRollComponent', () => {
  let component: BlogRollComponent;
  let fixture: ComponentFixture<BlogRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
