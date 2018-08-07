import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuestionAdmin } from './Types/QuestionAdmin.type';
import { QuestionAdding } from './Types/QuestionAdding.type';
import { TestAssign } from './Types/TestAssign.type';
import { TestPassedInfo } from 'src/app/Types/TestPassedInfo.type';
import { Answer } from 'src/app/Types/Answer.type';
import { Test, TestInfoStudent } from 'src/app/Types/TestInfoStudent.type';
import { AssignTest, TestTeacher } from 'src/app/Types/TestsTeacher.type';
import { TestSubmission } from 'src/app/Types/TestSubmission.type';
import { ConfirmTestInfo } from './confirm-training-test/confirmTest.type';
import { map } from 'rxjs/internal/operators';
import { UserService } from './user.service';
import { AllUsers, User } from './test-statistics-users-page/User.type';
import { CheckData } from './check-answer-page/question.type';

const questionsAdmin: QuestionAdmin[] = [
  { question: 'Что такое инкапсуляция?', tags: ['ООП', 'Инкапсуляция'], type: 'TYPE_TRAINING_QUESTION' },
  { question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], type: 'TYPE_PRIMARY_QUESTION' },
  { question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], type: 'TYPE_TRAINING_QUESTION' },
  { question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], type: 'TYPE_PRIMARY_QUESTION' },
  { question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция', 'Программирование', 'Помогите'], type: 'TYPE_TRAINING_QUESTION' },
  { question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], type: 'TYPE_TRAINING_QUESTION' },
  { question: 'Что такое инкапсуляция', tags: ['ООП', 'Инкапсуляция'], type: 'TYPE_TRAINING_QUESTION' }
];

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public users$: BehaviorSubject<User[]> = new BehaviorSubject([]);
  public questions$: BehaviorSubject<User[]> = new BehaviorSubject([]);
  private headers;
  paginationParams = {
    pageIndex: 0,
    pageSize: 5,
    length: questionsAdmin.length
  };
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
  searchParams = {
    query: '',
    paging: this.paginationParams
  };
  public bSubject$: BehaviorSubject<Test[]> = new BehaviorSubject([]);
  public bSubjectTeacher$: BehaviorSubject<TestTeacher[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient,
              private userService: UserService) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  }

  postAddQuestion(): Observable<QuestionAdding> {
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
    return this.http.get<AssignTest>(`http://localhost:3000/teacher/test/all-assignments/${id}?skip=${skip * top}&top=${top}`,
      { headers: this.headers, withCredentials: true }).subscribe(value => {
      console.log(value);
      /*value.map((item) => {
        item.timeToPassStr = (`0${Math.floor((item.timeToPass) / 60)}`).slice(-2) + ':' +
          (`0${(item.timeToPass) % 60}`).slice(-2);
      });*/
      this.bSubjectTeacher$.next(value.assignments);
      this.paginationParams.length = value.assignAmount;
    });
  }

  loadAllSubmissionsTeacher(assId) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TestPassedInfo>(`http://localhost:3000/teacher/test/my-std-submissions/${assId}`,
      { headers: this.headers, withCredentials: true });
  }

  loadStudentSubmissionTeacher(assId, studId) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TestPassedInfo>(`http://localhost:3000/teacher/test/sub-of-std/${assId}/${studId}`,
      { headers: this.headers, withCredentials: true });
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

  getCheckingQuestions(teacherId, skip, top) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<CheckData>(`http://localhost:3000/teacher/test/questions-check/${teacherId}?skip=${skip}&top=${top}`, {
      headers: this.headers,
      withCredentials: true
    });
  }

  confirmAnswer(checkId, isRightAnswer) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<void>(`http://localhost:3000/teacher/test/check-res/${checkId}/${isRightAnswer}`, {
      headers: this.headers,
      withCredentials: true
    });
  }

  getQuestions() {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<QuestionAdmin[]>(`http://localhost:3000/teacher/test/tag-questions`, { tags: '' }, {
      headers: this.headers,
      withCredentials: true
    });
  }
}
