import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obserbaledemo4Component } from './obserbaledemo4.component';

describe('Obserbaledemo4Component', () => {
  let component: Obserbaledemo4Component;
  let fixture: ComponentFixture<Obserbaledemo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Obserbaledemo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obserbaledemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
