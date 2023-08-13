import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroDibujoComponent } from './tablero-dibujo.component';

describe('TableroDibujoComponent', () => {
  let component: TableroDibujoComponent;
  let fixture: ComponentFixture<TableroDibujoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableroDibujoComponent]
    });
    fixture = TestBed.createComponent(TableroDibujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
