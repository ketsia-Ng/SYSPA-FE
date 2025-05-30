import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsectionComponent } from './editsection.component';

describe('EditsectionComponent', () => {
  let component: EditsectionComponent;
  let fixture: ComponentFixture<EditsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
