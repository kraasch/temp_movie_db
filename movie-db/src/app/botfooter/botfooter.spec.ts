import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Botfooter } from './botfooter';

describe('Botfooter', () => {
  let component: Botfooter;
  let fixture: ComponentFixture<Botfooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Botfooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Botfooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
