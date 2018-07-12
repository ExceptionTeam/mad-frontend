import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTasksTableComponent } from './student-tasks-table.component';

describe('StudentTasksTableComponent', () => {
  let component: StudentTasksTableComponent;
  let fixture: ComponentFixture<StudentTasksTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTasksTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTasksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
