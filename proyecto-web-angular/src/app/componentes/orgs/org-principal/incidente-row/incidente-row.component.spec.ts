import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenteRowComponent } from './incidente-row.component';

describe('IncidenteRowComponent', () => {
  let component: IncidenteRowComponent;
  let fixture: ComponentFixture<IncidenteRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenteRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenteRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
