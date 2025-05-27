import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListidentifvalidationComponent } from './listidentifvalidation.component';

describe('ListidentifvalidationComponent', () => {
  let component: ListidentifvalidationComponent;
  let fixture: ComponentFixture<ListidentifvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListidentifvalidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListidentifvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
