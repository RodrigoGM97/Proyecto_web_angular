import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesRowUserComponent } from './reportes-row-user.component';

describe('ReportesRowUserComponent', () => {
  let component: ReportesRowUserComponent;
  let fixture: ComponentFixture<ReportesRowUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesRowUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesRowUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
