import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbaremComponent } from './editbarem.component';

describe('EditbaremComponent', () => {
  let component: EditbaremComponent;
  let fixture: ComponentFixture<EditbaremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbaremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditbaremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
