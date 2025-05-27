import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbanqueComponent } from './addbanque.component';

describe('AddbanqueComponent', () => {
  let component: AddbanqueComponent;
  let fixture: ComponentFixture<AddbanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbanqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
