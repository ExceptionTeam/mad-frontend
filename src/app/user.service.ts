import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './sign-in-page/user.type';
import { University } from './Types/University.type';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers;
  role: string;
  id: string;
  name: string;
  surname: string;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    this.getInfo().subscribe(
      (user) => {
        this.id = user.id;
        this.role = user.role;
        this.name = user.name;
        this.surname = user.surname;
      },
      error => {
        this.role = '';
        this.id = '';
        this.name = '';
        this.surname = '';
      }
    );
  }

  signIn(body): Observable<User> {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<User>(
      'http://localhost:3000/guest/login',
      body,
      { headers: this.headers, withCredentials: true }
    ).pipe(
      tap((user) => {
        this.role = user.role;
        this.id = user.id;
        this.name = user.name;
        this.surname = user.surname;
      })
    );
  }

  getInfo() {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<User>(
      'http://localhost:3000/info',
      { headers: this.headers, withCredentials: true }
    );
  }

  signOut(): Observable<User> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<any>('http://localhost:3000/logout', { headers: this.headers, withCredentials: true });
  }

  registrate(body): Observable<object> {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post('http://localhost:3000/guest/register',
      body, {
        headers: this.headers,
        withCredentials: true
      });
  }

  editPassword(body) {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post('http://localhost:3000/change-password',
      body, {
        headers: this.headers,
        withCredentials: true
      });
  }

  forgotPassword(body) {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post('http://localhost:3000/guest/reset-password',
      body, {
        headers: this.headers,
        withCredentials: true
      });
  }

  getConfirmRole(skip, top) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<any>(`http://localhost:3000/admin/pending-teachers?skip=${skip}&top=${top}`,
      {
        headers: this.headers,
        withCredentials: true
      }).pipe(map(data => {
      const teachers = data.teachers.map(request => ({ ...request, display: true, onclickDone: null }));
      return { ...data, teachers };
    }));
  }

  confirmRole(id) {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<any>(`http://localhost:3000/admin/approve-teacher/${id}`, {},
      {
        headers: this.headers,
        withCredentials: true
      });
  }

  rejectRole(id) {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<any>(`http://localhost:3000/admin/reject-teacher/${id}`, {},
      {
        headers: this.headers,
        withCredentials: true
      });
  }

  getUniversity(body) {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.post<University[]>(`http://localhost:3000/guest/university`, body,
    {
      headers: this.headers,
      withCredentials: true
    });
  }

  getSkills() {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post<string[]>(`http://localhost:3000/guest/primary-skills`, {},
      {
        headers: this.headers,
        withCredentials: true
      });

  }
}
