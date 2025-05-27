import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListidentifadminsectComponent } from './listidentifadminsect.component';

describe('ListidentifadminsectComponent', () => {
  let component: ListidentifadminsectComponent;
  let fixture: ComponentFixture<ListidentifadminsectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListidentifadminsectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListidentifadminsectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
