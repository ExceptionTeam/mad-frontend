import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuestionAdmin } from './Types/QuestionAdmin.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfirmTestInfo } from './confirm-training-test/confirmTest.type';
import { map } from 'rxjs/internal/operators';

const questionsAdmin: QuestionAdmin[] = [
  { question: 'Что такое инкапсуляция: я ничего не знаю', tags: ['ООП', 'Инкапсуляция'], status: true },
  { question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], status: true },
  { question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], status: true },
  { question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], status: true },
  { question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция', 'Программирование', 'Помогите'], status: true },
  { question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], status: true },
  { question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], status: true }
];

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private headers;
  paginationParams = {
    pageIndex: 0,
    pageSize: 5,
    length: questionsAdmin.length
  };

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  }

  loadQuestions(): Observable<QuestionAdmin[]> {
    const startIndex = this.paginationParams.pageIndex * this.paginationParams.pageSize;
    return of(questionsAdmin.slice(startIndex, startIndex + this.paginationParams.pageSize));
  }

  teacherGetRequests(id) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<ConfirmTestInfo[]>(`http://localhost:3000/teacher/test/pending-requests/${id}`, {
      headers: this.headers,
      withCredentials: true
    }).pipe(map(data => data.map(request => ({ ...request, display: true, onclickDone: null }))));
  }

  confirmTest(reqId, teacherId) {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<void>(`http://localhost:3000/teacher/test/approve/${reqId}/${teacherId}`, {}, {
      headers: this.headers,
      withCredentials: true
    });
  }

  rejectTest(reqId) {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<void>(`http://localhost:3000/teacher/test/reject/${reqId}`, {}, {
      headers: this.headers,
      withCredentials: true
    });

  }

}
