import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateDemoComponent } from './form-template-demo.component';

describe('FormTemplateDemoComponent', () => {
  let component: FormTemplateDemoComponent;
  let fixture: ComponentFixture<FormTemplateDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTemplateDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTemplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
