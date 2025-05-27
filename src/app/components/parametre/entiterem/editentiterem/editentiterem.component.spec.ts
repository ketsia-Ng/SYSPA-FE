import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditentiteremComponent } from './editentiterem.component';

describe('EditentiteremComponent', () => {
  let component: EditentiteremComponent;
  let fixture: ComponentFixture<EditentiteremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditentiteremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditentiteremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
