import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarItem4Component } from './agregar-item4.component';

describe('AgregarItem4Component', () => {
  let component: AgregarItem4Component;
  let fixture: ComponentFixture<AgregarItem4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarItem4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarItem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
