import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { QuestionAdmin } from './Types/QuestionAdmin.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfirmTestInfo } from './confirm-training-test/confirmTest.type';
import { map } from 'rxjs/internal/operators';
import { UserService } from './user.service';
import { AllUsers, User } from './test-statistics-users-page/User.type';

const questionsAdmin: QuestionAdmin[] = [
  { question: 'Что такое инкапсуляция: я ничего не знаю и знать не собираюсь, вот так вот', tags: ['ООП', 'Инкапсуляция'], status: true },
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
  public users$: BehaviorSubject<User[]> = new BehaviorSubject([]);
  private headers;
  paginationParams = {
    pageIndex: 0,
    pageSize: 5,
    length: questionsAdmin.length
  };
  searchParams = {
    query: '',
    paging: this.paginationParams
  };

  constructor(private http: HttpClient,
              private userService: UserService) {
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

  getUsers(role, skip, top, body) {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<AllUsers>(`http://localhost:3000/admin/info/${role}?skip=${skip}&top=${top}`,
      { filterConfig: this.searchParams.query }, {
        headers: this.headers,
        withCredentials: true
      }).subscribe(value => {
      console.log('value ', value);
      this.users$.next(value.data);
      this.paginationParams.length = value.pagination.filtered;
    });
  }

  loadUsers(role) {
    console.log('this.searchParams.query ', this.searchParams.query);
    this.getUsers(
      role,
      this.paginationParams.pageIndex * this.paginationParams.pageSize,
      this.paginationParams.pageSize,
      this.searchParams.query
    );
  }


  /*getTeacherAdminAllTasks(skip: number, top: number, query, url) {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    this.http
      .post<TeacherTask>(`${url}?skip=${skip}&top=${top}`, query, {
        headers: this.headers,
        withCredentials: true
      })
      .subscribe(value => {
        this.bSubject$.next(value.data);
        this.paginationParams.length = value.pagination.filtered;
      });
  }

  loadTasks(role: string) {
    this.getUsers(
      this.paginationParams.pageIndex * this.paginationParams.pageSize,
      this.paginationParams.pageSize,
      this.searchParams.query,
    );
  }*/

}
