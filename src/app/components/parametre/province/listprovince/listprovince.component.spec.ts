import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprovinceComponent } from './listprovince.component';

describe('ListprovinceComponent', () => {
  let component: ListprovinceComponent;
  let fixture: ComponentFixture<ListprovinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListprovinceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
