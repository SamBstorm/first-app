import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingAttributeComponent } from './binding-attribute.component';

describe('BindingAttributeComponent', () => {
  let component: BindingAttributeComponent;
  let fixture: ComponentFixture<BindingAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
