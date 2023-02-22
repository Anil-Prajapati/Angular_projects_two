import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obserbaledemo2Component } from './obserbaledemo2.component';

describe('Obserbaledemo2Component', () => {
  let component: Obserbaledemo2Component;
  let fixture: ComponentFixture<Obserbaledemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Obserbaledemo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obserbaledemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
