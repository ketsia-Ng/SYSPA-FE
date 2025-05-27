import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituniteComponent } from './editunite.component';

describe('EdituniteComponent', () => {
  let component: EdituniteComponent;
  let fixture: ComponentFixture<EdituniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdituniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
