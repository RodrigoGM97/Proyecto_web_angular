import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosRowComponent } from './empleados-row.component';

describe('EmpleadosRowComponent', () => {
  let component: EmpleadosRowComponent;
  let fixture: ComponentFixture<EmpleadosRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
