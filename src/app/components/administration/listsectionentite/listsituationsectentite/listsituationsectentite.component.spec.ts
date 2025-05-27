import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsituationsectentiteComponent } from './listsituationsectentite.component';

describe('ListsituationsectentiteComponent', () => {
  let component: ListsituationsectentiteComponent;
  let fixture: ComponentFixture<ListsituationsectentiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsituationsectentiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsituationsectentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
