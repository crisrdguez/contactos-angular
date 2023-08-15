import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropTaskComponent } from './drag-drop-task.component';

describe('DragDropTaskComponent', () => {
  let component: DragDropTaskComponent;
  let fixture: ComponentFixture<DragDropTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DragDropTaskComponent],
      imports: [DragDropModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
