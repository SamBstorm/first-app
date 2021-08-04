import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectCompComponent } from './direct-comp.component';

describe('DirectCompComponent', () => {
  let component: DirectCompComponent;
  let fixture: ComponentFixture<DirectCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
