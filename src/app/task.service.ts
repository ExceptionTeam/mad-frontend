import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AssignRequestData } from 'src/app/Types/AssignRequestData.type';
import { TaskSubmition } from 'src/app/Types/TaskSubmition.type';
import { TaskFullInfo } from 'src/app/Types/TaskFullInfo.type';
import { Task } from './task-full-descr-teacher/task-full-description.type';
import { TaskFullDStudent } from './Types/TaskFullDStudent.type';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private headers;

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

  getInfoEditTask(id): Observable<TaskFullInfo> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TaskFullInfo>(`http://localhost:3000/teacher/task/full-info/${id}`,
      { headers: this.headers });
  }

  getInfoTaskTry(serviceUrl): Observable<TaskSubmition[]> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TaskSubmition[]>('http://localhost:3000/student/task/submissions' +
      '/' + '5b4e050ee507be22583ed804',
      { headers: this.headers });
  }

  getTeacherFullDescription(id: string): Observable<TaskFullInfo> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Methods', 'GET');
    console.log(`http://localhost:3000/teacher/task/full-info/${id}`);
    return this.http.get<TaskFullInfo>(`http://localhost:3000/teacher/task/full-info/${id}`, { headers: headers });
  }

  getStudentFullDescription(assId: string): Observable<TaskFullDStudent> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Methods', 'GET');
    console.log(`http://localhost:3000/student/task/full-info/${assId}`);
    return this.http.get<TaskFullDStudent>(`http://localhost:3000/student/task/full-info/${assId}`, { headers: headers });
  }

  deleteTask(id: string): Observable<boolean> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Methods', 'DELETE');
    return this.http.delete<boolean>(`http://localhost:3000/teacher/task/delete/${id}`, { headers: headers });
  }

  activateTask(id: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<any>(`http://localhost:3000/admin/task/activate/${id}`, {}, { headers: headers });
  }
}
