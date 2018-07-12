import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSendingPageComponent } from './task-sending-page.component';

describe('TaskSendingPageComponent', () => {
  let component: TaskSendingPageComponent;
  let fixture: ComponentFixture<TaskSendingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSendingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSendingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
