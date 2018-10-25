import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarItem3Component } from './agregar-item3.component';

describe('AgregarItem3Component', () => {
  let component: AgregarItem3Component;
  let fixture: ComponentFixture<AgregarItem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarItem3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
