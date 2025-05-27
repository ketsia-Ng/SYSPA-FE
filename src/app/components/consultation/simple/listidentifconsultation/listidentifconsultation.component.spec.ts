import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListidentifconsultationComponent } from './listidentifconsultation.component';

describe('ListidentifconsultationComponent', () => {
  let component: ListidentifconsultationComponent;
  let fixture: ComponentFixture<ListidentifconsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListidentifconsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListidentifconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
