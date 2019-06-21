import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenRepFormComponent } from './gen-rep-form.component';

describe('GenRepFormComponent', () => {
  let component: GenRepFormComponent;
  let fixture: ComponentFixture<GenRepFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenRepFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenRepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
