import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsInLionComponent } from './attractions-in-lion.component';

describe('AttractionsInLionComponent', () => {
  let component: AttractionsInLionComponent;
  let fixture: ComponentFixture<AttractionsInLionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionsInLionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsInLionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
