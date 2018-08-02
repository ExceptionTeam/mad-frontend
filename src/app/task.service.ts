import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AssignRequestData } from 'src/app/Types/AssignRequestData.type';
import { TaskSubmition } from 'src/app/Types/TaskSubmition.type';
import { TaskFullInfo } from 'src/app/Types/TaskFullInfo.type';
import { TaskFullDStudent } from './Types/TaskFullDStudent.type';
import { TeacherTask, Task } from './Types/TeacherTasks.type';
import { StudentTask } from './Types/StudentTasks.type';

const teacherTaskUrl = 'http://localhost:3000/teacher/task/abbreviated-info';
const adminTaskUrl = 'http://localhost:3000/admin/task/abbreviated-info';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private headers;
  public bSubject$: BehaviorSubject<Task[]> = new BehaviorSubject([]);
  public studentTasks$: BehaviorSubject<StudentTask[]> = new BehaviorSubject([]);

  paginationParams = {
    pageIndex: 0,
    pageSize: 10,
    length: 0
  };
  searchParams = {
    query: [],
    paging: this.paginationParams
  };

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  }

  /*postSendTaskStudent(body): Observable<FormData> {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    console.log(body);
    return this.http.post<FormData>('http://localhost:3000/teacher/task/assign',
      body, { headers: this.headers });
  }*/

  postAddTaskTeacher(body, length): Observable<FormData> {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    console.log(body);
    return this.http.post<FormData>('http://localhost:3000/teacher/task/upload-task?length=' + length,
      body, { headers: this.headers });
  }

  postEditTaskTeacher(body, id, length): Observable<FormData> {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<FormData>(`http://localhost:3000/teacher/task/edit-task/${id}/${length}`,
    body, { headers: this.headers });
  }

  postAssignTask(body): Observable<AssignRequestData> {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<AssignRequestData>('http://localhost:3000/teacher/task/assign',
      body, { headers: this.headers });
  }

  getStudentsAndGroups(id): Observable<any> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<any>('http://localhost:3000/teacher/students' + '?teacherId=' +
      '5b520978359e36150c9335fb',
      { headers: this.headers });
  }

  getTaskFullInfoTeacher(id): Observable<TaskFullInfo> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TaskFullInfo>(`http://localhost:3000/teacher/task/full-info/${id}`,
      { headers: this.headers });
  }

  getTeacherAdminAllTasks(skip: number, top: number, query, url) {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    this.http
      .post<TeacherTask>(`${url}?skip=${skip}&top=${top}`, query, {
        headers: this.headers
      })
      .subscribe(value => {
        this.bSubject$.next(value.data);
        this.paginationParams.length = value.pagination.filtered;
      });
  }

  getInfoTaskTry(id): Observable<TaskSubmition[]> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TaskSubmition[]>('http://localhost:3000/student/task/submissions' +
      '/' + id,
      { headers: this.headers });
  }

  getStudentTasks(id) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<StudentTask[]>(`http://localhost:3000/student/task/tasks-list/${id}`, {
      headers: this.headers
    }).subscribe(value => this.studentTasks$.next(value));
  }

  getStudentFullDescription(assId): Observable<TaskFullDStudent> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TaskFullDStudent>(`http://localhost:3000/student/task/full-info/${assId}`, { headers: this.headers });
  }

  getTaskFullInfoAdmin(id) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TaskFullInfo>(`http://localhost:3000/admin/task/full-info/${id}`, { headers: this.headers });
  }

  downloadTaskStudent(id) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    // this.headers.append('Content-type', 'text/plain');
    // this.headers.append('Accept', 'text/plain ');
    this.headers.append('Content-type', 'text/plain charset=utf-8');
    return this.http.get(`http://localhost:3000/student/task/download/${id}`, { headers: this.headers });
  }

  loadTasks(role: string) {
      this.getTeacherAdminAllTasks(
        this.paginationParams.pageIndex * this.paginationParams.pageSize,
        this.paginationParams.pageSize,
        this.searchParams.query, role === 'admin' ? adminTaskUrl : teacherTaskUrl
      );
  }

  deleteTask(id): Observable<boolean> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Methods', 'DELETE');
    return this.http.delete<boolean>(`http://localhost:3000/teacher/task/delete/${id}`, { headers: this.headers });
  }

  activateTask(id): Observable<any> {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<any>(`http://localhost:3000/admin/task/activate/${id}`, {}, { headers: this.headers });
  }
}
