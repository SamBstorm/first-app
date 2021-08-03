import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDateComponent } from './pipes-date.component';

describe('PipesDateComponent', () => {
  let component: PipesDateComponent;
  let fixture: ComponentFixture<PipesDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
