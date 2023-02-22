import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargeImagesComponent } from './marge-images.component';

describe('MargeImagesComponent', () => {
  let component: MargeImagesComponent;
  let fixture: ComponentFixture<MargeImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MargeImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MargeImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
