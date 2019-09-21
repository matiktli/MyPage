import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageTitleComponent } from './landing-page-title.component';

describe('LandingPageTitleComponent', () => {
  let component: LandingPageTitleComponent;
  let fixture: ComponentFixture<LandingPageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
