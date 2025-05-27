import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdetailbaremComponent } from './listdetailbarem.component';

describe('ListdetailbaremComponent', () => {
  let component: ListdetailbaremComponent;
  let fixture: ComponentFixture<ListdetailbaremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdetailbaremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdetailbaremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
