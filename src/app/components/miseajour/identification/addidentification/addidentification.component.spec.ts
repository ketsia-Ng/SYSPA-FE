import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddidentificationComponent } from './addidentification.component';

describe('AddidentificationComponent', () => {
  let component: AddidentificationComponent;
  let fixture: ComponentFixture<AddidentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddidentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddidentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
