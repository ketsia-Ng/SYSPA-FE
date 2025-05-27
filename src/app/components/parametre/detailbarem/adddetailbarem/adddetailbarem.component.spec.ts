import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddetailbaremComponent } from './adddetailbarem.component';

describe('AdddetailbaremComponent', () => {
  let component: AdddetailbaremComponent;
  let fixture: ComponentFixture<AdddetailbaremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddetailbaremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddetailbaremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
