import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsituationavanceComponent } from './listsituationavance.component';

describe('ListsituationavanceComponent', () => {
  let component: ListsituationavanceComponent;
  let fixture: ComponentFixture<ListsituationavanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsituationavanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsituationavanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
