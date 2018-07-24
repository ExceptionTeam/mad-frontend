import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task-full-descr-teacher/task-full-description.type';
import { Observable } from 'rxjs';
import { TaskFullDStudent } from './task-sending-page/task-sending-page.type';

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

  getTeacherFullDescription(id: string): Observable<Task> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Methods', 'GET');
    console.log(`http://localhost:3000/teacher/task/full-info/${id}`);
    return this.http.get<Task>(`http://localhost:3000/teacher/task/full-info/${id}`, { headers: headers });
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
