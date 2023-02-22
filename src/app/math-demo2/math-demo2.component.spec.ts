import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathDemo2Component } from './math-demo2.component';

describe('MathDemo2Component', () => {
  let component: MathDemo2Component;
  let fixture: ComponentFixture<MathDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathDemo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
