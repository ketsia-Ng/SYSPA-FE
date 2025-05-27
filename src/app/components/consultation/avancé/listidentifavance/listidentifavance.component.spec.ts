import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListidentifavanceComponent } from './listidentifavance.component';

describe('ListidentifavanceComponent', () => {
  let component: ListidentifavanceComponent;
  let fixture: ComponentFixture<ListidentifavanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListidentifavanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListidentifavanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
