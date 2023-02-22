import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiledTwoComponent } from './chiled-two.component';

describe('ChiledTwoComponent', () => {
  let component: ChiledTwoComponent;
  let fixture: ComponentFixture<ChiledTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiledTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiledTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
