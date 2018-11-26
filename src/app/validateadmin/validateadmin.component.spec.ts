import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateadminComponent } from './validateadmin.component';

describe('ValidateadminComponent', () => {
  let component: ValidateadminComponent;
  let fixture: ComponentFixture<ValidateadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
