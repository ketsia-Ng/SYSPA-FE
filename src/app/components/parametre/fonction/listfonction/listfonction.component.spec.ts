import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfonctionComponent } from './listfonction.component';

describe('ListfonctionComponent', () => {
  let component: ListfonctionComponent;
  let fixture: ComponentFixture<ListfonctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfonctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListfonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
