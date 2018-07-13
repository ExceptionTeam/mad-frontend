import { Component, Input } from '@angular/core';

@Component({
  selector: 'exc-table-my-tasks-teacher',
  templateUrl: './table-my-tasks-teacher.component.html',
  styleUrls: ['./table-my-tasks-teacher.component.scss']
})
export class TableMyTasksTeacherComponent {
  @Input() tasks: string[];

  displayedColumns: string[] = ['name', 'weight', 'appoint'];
}
