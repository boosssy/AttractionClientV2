import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsInSevillaComponent } from './attractions-in-sevilla.component';

describe('AttractionsInSevillaComponent', () => {
  let component: AttractionsInSevillaComponent;
  let fixture: ComponentFixture<AttractionsInSevillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionsInSevillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsInSevillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
