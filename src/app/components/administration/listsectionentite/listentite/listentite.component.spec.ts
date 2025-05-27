import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListentiteComponent } from './listentite.component';

describe('ListentiteComponent', () => {
  let component: ListentiteComponent;
  let fixture: ComponentFixture<ListentiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListentiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
