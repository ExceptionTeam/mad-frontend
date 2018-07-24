import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AssignRequestData } from 'src/app/Types/AssignRequestData.type';
import { InputOutputFiles } from 'src/app/Types/InputOutputFiles.type';
import { TaskSolvingInfo } from 'src/app/Types/TaskSolvingInfo.type';
import { TaskEditInfo } from 'src/app/Types/TaskEditInfo.type';

@Injectable({
  providedIn: 'root'
})
export class TasksTeacherService {
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
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

  getInfoEditTask(serviceUrl): Observable<TaskEditInfo> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TaskEditInfo>('http://localhost:3000/teacher/task/full-info' +
      '/' + '5b48b577914ce718d8d5831b',
      { headers: this.headers });
  }

  getInfoTaskTry(serviceUrl): Observable<TaskSolvingInfo[]> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<TaskSolvingInfo[]>('http://localhost:3000/student/task/submissions' +
      '/' + '5b4e050ee507be22583ed804',
      { headers: this.headers });
  }

}
