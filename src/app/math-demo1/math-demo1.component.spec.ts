import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathDemo1Component } from './math-demo1.component';

describe('MathDemo1Component', () => {
  let component: MathDemo1Component;
  let fixture: ComponentFixture<MathDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathDemo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
