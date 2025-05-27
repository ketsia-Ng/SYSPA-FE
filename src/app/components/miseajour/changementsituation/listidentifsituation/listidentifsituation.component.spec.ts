import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListidentifsituationComponent } from './listidentifsituation.component';

describe('ListidentifsituationComponent', () => {
  let component: ListidentifsituationComponent;
  let fixture: ComponentFixture<ListidentifsituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListidentifsituationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListidentifsituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
