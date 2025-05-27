import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpositionComponent } from './listposition.component';

describe('ListpositionComponent', () => {
  let component: ListpositionComponent;
  let fixture: ComponentFixture<ListpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
