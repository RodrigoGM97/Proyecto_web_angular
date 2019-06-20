import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteGenReporteComponent } from './cliente-gen-reporte.component';

describe('ClienteGenReporteComponent', () => {
  let component: ClienteGenReporteComponent;
  let fixture: ComponentFixture<ClienteGenReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteGenReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteGenReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
