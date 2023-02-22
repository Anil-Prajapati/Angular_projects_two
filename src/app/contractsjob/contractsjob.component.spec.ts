import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsjobComponent } from './contractsjob.component';

describe('ContractsjobComponent', () => {
  let component: ContractsjobComponent;
  let fixture: ComponentFixture<ContractsjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractsjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractsjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
