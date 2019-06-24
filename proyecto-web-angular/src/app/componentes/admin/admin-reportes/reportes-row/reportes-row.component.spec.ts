import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesRowComponent } from './reportes-row.component';

describe('ReportesRowComponent', () => {
  let component: ReportesRowComponent;
  let fixture: ComponentFixture<ReportesRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
