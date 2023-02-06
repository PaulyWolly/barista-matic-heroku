import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensedComponent } from './dispensed.component';

describe('DispensedComponent', () => {
  let component: DispensedComponent;
  let fixture: ComponentFixture<DispensedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
