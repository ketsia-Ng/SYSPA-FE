import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichesituationComponent } from './fichesituation.component';

describe('FichesituationComponent', () => {
  let component: FichesituationComponent;
  let fixture: ComponentFixture<FichesituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichesituationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichesituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
