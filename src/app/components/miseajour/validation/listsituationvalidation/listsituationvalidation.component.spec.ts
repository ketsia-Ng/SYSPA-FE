import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsituationvalidationComponent } from './listsituationvalidation.component';

describe('ListsituationvalidationComponent', () => {
  let component: ListsituationvalidationComponent;
  let fixture: ComponentFixture<ListsituationvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsituationvalidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsituationvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
