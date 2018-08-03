import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuestionAdmin } from './Types/QuestionAdmin.type';

const questionsAdmin: QuestionAdmin[] = [
  {question: 'Что такое инкапсуляция: я ничего не знаю и знать не собираюсь, вот так вот', tags: ['ООП', 'Инкапсуляция'], status: true},
  {question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], status: true},
  {question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], status: true},
  {question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], status: true},
  {question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция', 'Программирование', 'Помогите'], status: true},
  {question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], status: true},
  {question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], status: true}
];

@Injectable({
  providedIn: 'root'
})
export class TestService {
  paginationParams = {
    pageIndex: 0,
    pageSize: 5,
    length: questionsAdmin.length
  };

  loadQuestions(): Observable<QuestionAdmin[]> {
    const startIndex = this.paginationParams.pageIndex * this.paginationParams.pageSize;
    return of (questionsAdmin.slice(startIndex, startIndex + this.paginationParams.pageSize));
  }
}
