import { Component } from '@angular/core';

@Component({
  selector: 'exc-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  StudentsRating = [
    { name: 'Лиля', surname: 'Оданец' },
    { name: 'Леша', surname: 'Мухарский' },
    { name: 'Аня', surname: 'Кисель' },
    { name: 'Артем', surname: 'Германенко' },
    { name: 'Валера', surname: 'Стребко' },
    { name: 'Влад', surname: 'Малиновский' },
    { name: 'Влад', surname: 'Малиновский' },
    { name: 'Влад', surname: 'Малиновский' },
    { name: 'Влад', surname: 'Малиновский' },
    { name: 'Влад', surname: 'Малиновский' },
  ];

  StudentsTests = [
    { name: 'Лиля', surname: 'Оданец' },
    { name: 'Леша', surname: 'Мухарский' },
    { name: 'Аня', surname: 'Кисель' },
    { name: 'Артем', surname: 'Германенко' },
    { name: 'Валера', surname: 'Стребко' },
    { name: 'Влад', surname: 'Малиновский' },
    { name: 'Влад', surname: 'Малиновский' },
    { name: 'Влад', surname: 'Малиновский' },
    { name: 'Влад', surname: 'Малиновский' },
    { name: 'Влад', surname: 'Малиновский' },
  ];

  ratings = [{ title: 'Топ-10 по рейтингу', list: this.StudentsRating },
    { title: 'Топ-10 по тестам', list: this.StudentsTests },
    { title: 'Топ-10 по задачам', list: this.StudentsRating },
    { title: 'Топ-10 по активности', list: this.StudentsRating },
  ];

  constructor() {
  }

}
