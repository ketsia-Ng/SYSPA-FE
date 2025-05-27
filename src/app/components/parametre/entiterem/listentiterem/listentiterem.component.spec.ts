import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListentiteremComponent } from './listentiterem.component';

describe('ListentiteremComponent', () => {
  let component: ListentiteremComponent;
  let fixture: ComponentFixture<ListentiteremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListentiteremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListentiteremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
