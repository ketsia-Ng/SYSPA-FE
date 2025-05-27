import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsituationComponent } from './listsituation.component';

describe('ListsituationComponent', () => {
  let component: ListsituationComponent;
  let fixture: ComponentFixture<ListsituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsituationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
