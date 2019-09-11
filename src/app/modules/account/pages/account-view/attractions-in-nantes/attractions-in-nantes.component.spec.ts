import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsInNantesComponent } from './attractions-in-nantes.component';

describe('AttractionsInNantesComponent', () => {
  let component: AttractionsInNantesComponent;
  let fixture: ComponentFixture<AttractionsInNantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionsInNantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsInNantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
