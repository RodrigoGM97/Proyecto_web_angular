import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgPrincipalComponent } from './org-principal.component';

describe('OrgPrincipalComponent', () => {
  let component: OrgPrincipalComponent;
  let fixture: ComponentFixture<OrgPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
