import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonGoBackComponent } from './common-go-back.component';

describe('CommonGoBackComponent', () => {
  let component: CommonGoBackComponent;
  let fixture: ComponentFixture<CommonGoBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonGoBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonGoBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
