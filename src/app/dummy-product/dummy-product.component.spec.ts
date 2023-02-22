import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyProductComponent } from './dummy-product.component';

describe('DummyProductComponent', () => {
  let component: DummyProductComponent;
  let fixture: ComponentFixture<DummyProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
