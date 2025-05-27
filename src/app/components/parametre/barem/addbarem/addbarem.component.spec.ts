import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbaremComponent } from './addbarem.component';

describe('AddbaremComponent', () => {
  let component: AddbaremComponent;
  let fixture: ComponentFixture<AddbaremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbaremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbaremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
