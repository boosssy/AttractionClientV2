import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedOperationPageComponent } from './failed-operation-page.component';

describe('FailedOperationPageComponent', () => {
  let component: FailedOperationPageComponent;
  let fixture: ComponentFixture<FailedOperationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedOperationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedOperationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
