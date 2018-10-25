import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarItem2Component } from './agregar-item2.component';

describe('AgregarItem2Component', () => {
  let component: AgregarItem2Component;
  let fixture: ComponentFixture<AgregarItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
