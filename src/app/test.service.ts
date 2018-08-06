import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { QuestionAdmin } from './Types/QuestionAdmin.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TestPassedInfo } from 'src/app/Types/TestPassedInfo.type';
import { Answer } from 'src/app/Types/Answer.type';
import { TestInfoStudent, Test } from 'src/app/Types/TestInfoStudent.type';
import { TestTeacher } from 'src/app/Types/TestsTeacher.type';
import { TestSubmission } from 'src/app/Types/TestSubmission.type';

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
  public bSubject$: BehaviorSubject<Test[]> = new BehaviorSubject([]);
  public bSubjectTeacher$: BehaviorSubject<TestTeacher[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  }

  loadQuestions(): Observable<QuestionAdmin[]> {
    const startIndex = this.paginationParams.pageIndex * this.paginationParams.pageSize;
    return of(questionsAdmin.slice(startIndex, startIndex + this.paginationParams.pageSize));
  }

  loadTest(assId, studId): Observable<TestPassedInfo> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TestPassedInfo>(`http://localhost:3000/student/test/submission/${assId}/${studId}`,
      { headers: this.headers, withCredentials: true });
  }

  sendAnswersTest(subId, answeres: Answer[]): Observable<Answer[]> {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<Answer[]>(`http://localhost:3000/student/test/answers/${subId}`, answeres,
      { headers: this.headers, withCredentials: true });
  }

  loadAllTestsStudent(studId, skip, top) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TestInfoStudent>(`http://localhost:3000/student/test/assignments/${studId}?skip=${skip * top}&top=${top}`,
      { headers: this.headers, withCredentials: true }).subscribe(value => {
        value.ids.map((item) => {
          item.timeToPassStr = (`0${Math.floor((item.timeToPass) / 60)}`).slice(-2) + ':' +
            (`0${(item.timeToPass) % 60}`).slice(-2);
        });
        this.bSubject$.next(value.ids);
        this.paginationParams.length = value.amount;
      });
  }

  loadAllTests(studId) {
    this.loadAllTestsStudent(studId, this.paginationParams.pageIndex, this.paginationParams.pageSize);
  }

  loadAllAssignTestsTeacher(id, skip, top) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TestTeacher[]>(`http://localhost:3000/teacher/test/all-assignments/${id}?skip=${skip * top}&top=${top}`,
      { headers: this.headers, withCredentials: true }).subscribe(value => {
        value.map((item) => {
          item.timeToPassStr = (`0${Math.floor((item.timeToPass) / 60)}`).slice(-2) + ':' +
            (`0${(item.timeToPass) % 60}`).slice(-2);
        });
        this.bSubjectTeacher$.next(value);
        this.paginationParams.length = value.length;
      });
  }

  loadAllAssignedTests(teacherId) {
    this.loadAllAssignTestsTeacher(teacherId, this.paginationParams.pageIndex, this.paginationParams.pageSize);
  }

  createTestSubmission(assignId, studId) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    console.log('ass ' + assignId);
    return this.http.get<TestSubmission>(`http://localhost:3000/student/test/submission/${assignId}/${studId}`,
    { headers: this.headers, withCredentials: true });
  }
}
