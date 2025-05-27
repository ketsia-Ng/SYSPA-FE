import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsituationComponent } from './editsituation.component';

describe('EditsituationComponent', () => {
  let component: EditsituationComponent;
  let fixture: ComponentFixture<EditsituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsituationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
