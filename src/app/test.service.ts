import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { QuestionAdmin } from './Types/QuestionAdmin.type';
import { QuestionAdding } from './Types/QuestionAdding.type';

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
  private headers;
  public que: QuestionAdding = {
  section: [],
  tags: [],
  type: '',
  active: true,
  category: '',
  question: '',
  questionAuthorId: '',
  answerOptions: [],
  correctOptions: [],
  difficulty: 1
  };
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  }

  postAddQuestion (): Observable<QuestionAdding> {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    console.log(this.que );
    return this.http.post<QuestionAdding>('http://localhost:3000/teacher/test/new-question/',
     this.que, { headers: this.headers, withCredentials: true });
  }

  loadQuestions(): Observable<QuestionAdmin[]> {
    const startIndex = this.paginationParams.pageIndex * this.paginationParams.pageSize;
    return of (questionsAdmin.slice(startIndex, startIndex + this.paginationParams.pageSize));
  }
}
