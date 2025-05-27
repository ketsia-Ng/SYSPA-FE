import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddentiteremComponent } from './addentiterem.component';

describe('AddentiteremComponent', () => {
  let component: AddentiteremComponent;
  let fixture: ComponentFixture<AddentiteremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddentiteremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddentiteremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
