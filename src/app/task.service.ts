import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AssignRequestData } from 'src/app/Types/AssignRequestData.type';
import { TaskSubmition } from 'src/app/Types/TaskSubmition.type';
import { TaskFullInfo } from 'src/app/Types/TaskFullInfo.type';
import { TaskFullDStudent } from './Types/TaskFullDStudent.type';
import { TeacherTask, Task } from './Types/TeacherTasks.type';
import { StudentTask } from './Types/StudentTasks.type';

const teacherTaskUrl = 'http://localhost:3000/teacher/task/abbreviated-info';

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

  /*postEditTaskTeacher(body): Observable<TaskEditInfoServer> {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    console.log(body);
    return this.http.post<TaskEditInfoServer>('http://localhost:3000/teacher/task/assign',
      body, { headers: this.headers });
  }*/

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

  getTeacherAllTasks(skip: number, top: number, query) {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    this.http
      .post<TeacherTask>(`${teacherTaskUrl}?skip=${skip}&top=${top}`, query, {
        headers: this.headers
      })
      .subscribe(value => {
        this.bSubject$.next(value.data);
        this.paginationParams.length = value.pagination.filtered;
      });
  }

  getInfoTaskTry(serviceUrl): Observable<TaskSubmition[]> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TaskSubmition[]>('http://localhost:3000/student/task/submissions' +
      '/' + '5b4e050ee507be22583ed804',
      { headers: this.headers });
  }

  getStudentTasks(id) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<StudentTask[]>(`http://localhost:3000/student/task/tasks-list/${id}`, { headers: this.headers
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

  loadTasks() {
    this.getTeacherAllTasks(
      this.paginationParams.pageIndex * this.paginationParams.pageSize,
      this.paginationParams.pageSize,
      this.searchParams.query
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
