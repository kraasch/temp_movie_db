import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cookiebar } from './cookiebar';

describe('Cookiebar', () => {
  let component: Cookiebar;
  let fixture: ComponentFixture<Cookiebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cookiebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cookiebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
