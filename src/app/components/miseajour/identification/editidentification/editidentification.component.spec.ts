import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditidentificationComponent } from './editidentification.component';

describe('EditidentificationComponent', () => {
  let component: EditidentificationComponent;
  let fixture: ComponentFixture<EditidentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditidentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditidentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
