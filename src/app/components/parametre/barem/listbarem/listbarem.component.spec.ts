import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbaremComponent } from './listbarem.component';

describe('ListbaremComponent', () => {
  let component: ListbaremComponent;
  let fixture: ComponentFixture<ListbaremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbaremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListbaremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
