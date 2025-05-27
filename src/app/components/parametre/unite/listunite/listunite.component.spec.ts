import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuniteComponent } from './listunite.component';

describe('ListuniteComponent', () => {
  let component: ListuniteComponent;
  let fixture: ComponentFixture<ListuniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
