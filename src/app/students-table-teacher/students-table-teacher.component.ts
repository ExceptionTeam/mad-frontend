import { Component, Input } from '@angular/core';

@Component({
  selector: 'exc-students-table-teacher',
  templateUrl: './students-table-teacher.component.html',
  styleUrls: ['./students-table-teacher.component.scss']
})
export class StudentsTableTeacherComponent {
  @Input() dataSource;
  displayedColumns: string[] = ['nameSurname', 'icon'];

  color(item) {
    if (item) {
      return 'green';
    }
    return 'red';
  }
  constructor() {}

}
