import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDrivenDemoComponent } from './form-driven-demo.component';

describe('FormDrivenDemoComponent', () => {
  let component: FormDrivenDemoComponent;
  let fixture: ComponentFixture<FormDrivenDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDrivenDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDrivenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
