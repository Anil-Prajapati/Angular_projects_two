import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentsjobComponent } from './permanentsjob.component';

describe('PermanentsjobComponent', () => {
  let component: PermanentsjobComponent;
  let fixture: ComponentFixture<PermanentsjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentsjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermanentsjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
