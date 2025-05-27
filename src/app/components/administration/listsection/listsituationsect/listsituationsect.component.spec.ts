import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsituationsectComponent } from './listsituationsect.component';

describe('ListsituationsectComponent', () => {
  let component: ListsituationsectComponent;
  let fixture: ComponentFixture<ListsituationsectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsituationsectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsituationsectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
