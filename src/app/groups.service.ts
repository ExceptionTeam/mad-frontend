import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskFullInfo } from './Types/TaskFullInfo.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  private headers;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  }

  createGroup(body) {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<TaskFullInfo>(`http://localhost:3000/teacher/add-group`, body,
      { headers: this.headers, withCredentials: true });
  }

  getStudentsAndGroups(id): Observable<any> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<any>('http://localhost:3000/teacher/students' + '?teacherId=' + id,
      { headers: this.headers, withCredentials: true });
  }
}
