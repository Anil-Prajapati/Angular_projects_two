import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obserbaledemo1Component } from './obserbaledemo1.component';

describe('Obserbaledemo1Component', () => {
  let component: Obserbaledemo1Component;
  let fixture: ComponentFixture<Obserbaledemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Obserbaledemo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obserbaledemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
