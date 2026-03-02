import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoverimg } from './hoverimg';

describe('Hoverimg', () => {
  let component: Hoverimg;
  let fixture: ComponentFixture<Hoverimg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoverimg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hoverimg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
