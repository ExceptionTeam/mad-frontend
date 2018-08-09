import { Component } from '@angular/core';

@Component({
  selector: 'exc-main-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  StudentsRating = [
    { name: 'Лилия', surname: 'Оданец' },
    { name: 'Алексей', surname: 'Мухарский' },
    { name: 'Анна', surname: 'Кисель' },
    { name: 'Артем', surname: 'Германенко' },
    { name: 'Валерий', surname: 'Стребко' },
    { name: 'Владислав', surname: 'Малиновский' },
    { name: 'Алексей', surname: 'Козленков' },
    { name: 'Алексей', surname: 'Батышев' },
    { name: 'Максим', surname: 'Мирончик' },
    { name: 'Борис', surname: 'Серенков' },
  ];

  StudentsTests = [
    { name: 'Лилия', surname: 'Оданец' },
    { name: 'Алексей', surname: 'Мухарский' },
    { name: 'Анна', surname: 'Кисель' },
    { name: 'Артем', surname: 'Германенко' },
    { name: 'Валерий', surname: 'Стребко' },
    { name: 'Алексей', surname: 'Козленков' },
    { name: 'Владислав', surname: 'Малиновский' },
    { name: 'Роман', surname: 'Бовкунович' },
    { name: 'Александр', surname: 'Батышев' },
    { name: 'Борис', surname: 'Серенков' },
  ];

  ratings = [{ title: 'Топ-10 по рейтингу', list: this.StudentsRating },
    { title: 'Топ-10 по тестам', list: this.StudentsTests },
    { title: 'Топ-10 по задачам', list: this.StudentsRating },
    { title: 'Топ-10 по активности', list: this.StudentsRating },
  ];

  constructor() {
  }

}
