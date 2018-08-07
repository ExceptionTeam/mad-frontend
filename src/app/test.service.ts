import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuestionAdmin } from './Types/QuestionAdmin.type';
import { QuestionAdding } from './Types/QuestionAdding.type';
import { TestAssign } from './Types/TestAssign.type';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { TestPassedInfo } from 'src/app/Types/TestPassedInfo.type';
import { Answer } from 'src/app/Types/Answer.type';
import { TestInfoStudent, Test } from 'src/app/Types/TestInfoStudent.type';
import { TestTeacher } from 'src/app/Types/TestsTeacher.type';
import { TestSubmission } from 'src/app/Types/TestSubmission.type';
import { ConfirmTestInfo } from './confirm-training-test/confirmTest.type';
import { map } from 'rxjs/internal/operators';

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
  public bSubject$: BehaviorSubject<Test[]> = new BehaviorSubject([]);
  public bSubjectTeacher$: BehaviorSubject<TestTeacher[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  }

  postAddQuestion (): Observable<QuestionAdding> {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<QuestionAdding>('http://localhost:3000/teacher/test/new-question/',
     this.que, { headers: this.headers, withCredentials: true });
  }

  postAssignTest (body): Observable<TestAssign> {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<TestAssign>('http://localhost:3000/teacher/test/new-assignment/', body,
     { headers: this.headers, withCredentials: true });
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
