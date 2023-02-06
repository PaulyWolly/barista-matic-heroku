import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvContentComponent } from './inv-content.component';

describe('InvContentComponent', () => {
  let component: InvContentComponent;
  let fixture: ComponentFixture<InvContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
