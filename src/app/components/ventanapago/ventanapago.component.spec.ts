import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanapagoComponent } from './ventanapago.component';

describe('VentanapagoComponent', () => {
  let component: VentanapagoComponent;
  let fixture: ComponentFixture<VentanapagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentanapagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanapagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
