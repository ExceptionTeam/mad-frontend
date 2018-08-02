import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './sign-in-page/user.type';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers;
  role: string;
  id: string;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    this.getInfo().subscribe();
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
      })
    );
  }

  getInfo() {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<User>(
      'http://localhost:3000/info',
      { headers: this.headers, withCredentials: true }
    ).pipe(
      tap((user) => {
        this.role = user.role;
        this.id = user.id;
        console.log(this.role);
      })
    );
  }

  signOut(): Observable<User> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    console.log('role!!! ', this.role);
    return this.http.get<any>('http://localhost:3000/logout', { headers: this.headers, withCredentials: true });
  }
}
