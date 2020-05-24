import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyComponentComponent } from './money-component.component';

describe('MoneyComponentComponent', () => {
  let component: MoneyComponentComponent;
  let fixture: ComponentFixture<MoneyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
