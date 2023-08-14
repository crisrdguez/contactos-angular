import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomContactComponent } from './random-contact.component';

describe('RandomContactComponent', () => {
  let component: RandomContactComponent;
  let fixture: ComponentFixture<RandomContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomContactComponent]
    });
    fixture = TestBed.createComponent(RandomContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
