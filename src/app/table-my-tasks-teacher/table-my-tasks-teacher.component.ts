import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  date: string;
  appoint: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Триангуляция n-угольника', date: '11.07.2018', appoint: 'назначить' },
  { position: 2, name: 'Выбрать поднабор', date: '11.07.2018', appoint: 'назначить' },
  { position: 3, name: 'Бинарные последовательности', date: '11.07.2018', appoint: 'назначить' },
  { position: 4, name: 'Пробирки', date: '11.07.2018', appoint: 'назначить' },
  { position: 5, name: 'Игра', date: '11.07.2018', appoint: 'назначить' },
  { position: 6, name: 'Полигон', date: '11.07.2018', appoint: 'назначить' },
  { position: 7, name: 'Эпидемия', date: '11.07.2018', appoint: 'назначить' },
  { position: 8, name: 'Торговые скидки', date: '11.07.2018', appoint: 'назначить' },
  { position: 9, name: 'Больше не запишешь', date: '11.07.2018', appoint: 'назначить' },
  { position: 10, name: 'Блок из единиц', date: '11.07.2018', appoint: 'назначить' },
];

@Component({
  selector: 'exc-table-my-tasks-teacher',
  templateUrl: './table-my-tasks-teacher.component.html',
  styleUrls: ['./table-my-tasks-teacher.component.scss']
})
export class TableMyTasksTeacherComponent {
  displayedColumns: string[] = ['position', 'name', 'date', 'appoint'];
  dataSource = ELEMENT_DATA;
}
