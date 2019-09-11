import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsInMadridComponent } from './attractions-in-madrid.component';

describe('AttractionsInMadridComponent', () => {
  let component: AttractionsInMadridComponent;
  let fixture: ComponentFixture<AttractionsInMadridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionsInMadridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsInMadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
