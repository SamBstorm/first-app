import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectStructComponent } from './direct-struct.component';

describe('DirectStructComponent', () => {
  let component: DirectStructComponent;
  let fixture: ComponentFixture<DirectStructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectStructComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
