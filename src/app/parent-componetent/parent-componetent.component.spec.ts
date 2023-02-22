import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponetentComponent } from './parent-componetent.component';

describe('ParentComponetentComponent', () => {
  let component: ParentComponetentComponent;
  let fixture: ComponentFixture<ParentComponetentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponetentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComponetentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
