import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obserbaledemo3Component } from './obserbaledemo3.component';

describe('Obserbaledemo3Component', () => {
  let component: Obserbaledemo3Component;
  let fixture: ComponentFixture<Obserbaledemo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Obserbaledemo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obserbaledemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
