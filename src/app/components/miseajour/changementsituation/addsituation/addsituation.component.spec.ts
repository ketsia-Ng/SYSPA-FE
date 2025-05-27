import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsituationComponent } from './addsituation.component';

describe('AddsituationComponent', () => {
  let component: AddsituationComponent;
  let fixture: ComponentFixture<AddsituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsituationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
