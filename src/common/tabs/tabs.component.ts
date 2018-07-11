import { Component } from '@angular/core';

@Component({
  selector: 'exc-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  tabs = ['Статистика', 'Назначить задачу', 'Назначить тест', 'Статус'];
}
