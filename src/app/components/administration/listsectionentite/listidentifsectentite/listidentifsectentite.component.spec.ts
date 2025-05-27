import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListidentifsectentiteComponent } from './listidentifsectentite.component';

describe('ListidentifsectentiteComponent', () => {
  let component: ListidentifsectentiteComponent;
  let fixture: ComponentFixture<ListidentifsectentiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListidentifsectentiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListidentifsectentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
