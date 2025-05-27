import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduniteComponent } from './addunite.component';

describe('AdduniteComponent', () => {
  let component: AdduniteComponent;
  let fixture: ComponentFixture<AdduniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdduniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
