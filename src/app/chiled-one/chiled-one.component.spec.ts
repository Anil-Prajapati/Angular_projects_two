import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiledOneComponent } from './chiled-one.component';

describe('ChiledOneComponent', () => {
  let component: ChiledOneComponent;
  let fixture: ComponentFixture<ChiledOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiledOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiledOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
