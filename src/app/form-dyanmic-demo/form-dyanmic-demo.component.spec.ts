import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDyanmicDemoComponent } from './form-dyanmic-demo.component';

describe('FormDyanmicDemoComponent', () => {
  let component: FormDyanmicDemoComponent;
  let fixture: ComponentFixture<FormDyanmicDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDyanmicDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDyanmicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
