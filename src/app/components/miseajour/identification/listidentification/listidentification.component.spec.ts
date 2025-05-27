import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListidentificationComponent } from './listidentification.component';

describe('ListidentificationComponent', () => {
  let component: ListidentificationComponent;
  let fixture: ComponentFixture<ListidentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListidentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListidentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
