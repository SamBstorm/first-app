import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesJsonComponent } from './pipes-json.component';

describe('PipesJsonComponent', () => {
  let component: PipesJsonComponent;
  let fixture: ComponentFixture<PipesJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
