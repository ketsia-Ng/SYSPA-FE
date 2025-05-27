import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdetailbaremComponent } from './editdetailbarem.component';

describe('EditdetailbaremComponent', () => {
  let component: EditdetailbaremComponent;
  let fixture: ComponentFixture<EditdetailbaremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdetailbaremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdetailbaremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
