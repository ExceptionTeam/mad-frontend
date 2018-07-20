import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task-full-descr-teacher/task-full-description.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {
  }

  getTeacherFullDescription(id: number): Observable<Task> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    return this.http.get<Task>(`http://localhost:3000/teacher/task/full-info/${id}`, { headers: headers });
  }
}
