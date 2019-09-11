import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsInAntaylaComponent } from './attractions-in-antayla.component';

describe('AttractionsInAntaylaComponent', () => {
  let component: AttractionsInAntaylaComponent;
  let fixture: ComponentFixture<AttractionsInAntaylaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionsInAntaylaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsInAntaylaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
