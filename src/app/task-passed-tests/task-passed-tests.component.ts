import { Component, Input } from '@angular/core';

@Component({
  selector: 'exc-task-passed-tests',
  templateUrl: './task-passed-tests.component.html',
  styleUrls: ['./task-passed-tests.component.scss']
})
export class TaskPassedTestsComponent {
  @Input() dataSource;
  displayedColumns: string[] = ['fileName', 'status'];

  color(item) {
    if (item) {
      return 'green';
    }
    return 'red';
  }
}
