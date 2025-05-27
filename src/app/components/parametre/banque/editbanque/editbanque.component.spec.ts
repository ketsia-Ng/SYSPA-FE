import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbanqueComponent } from './editbanque.component';

describe('EditbanqueComponent', () => {
  let component: EditbanqueComponent;
  let fixture: ComponentFixture<EditbanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbanqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditbanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
