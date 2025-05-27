import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsituationconsultationComponent } from './listsituationconsultation.component';

describe('ListsituationconsultationComponent', () => {
  let component: ListsituationconsultationComponent;
  let fixture: ComponentFixture<ListsituationconsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsituationconsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsituationconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
