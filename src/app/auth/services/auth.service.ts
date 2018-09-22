import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Api } from '../../api';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements Api {

  public readonly API_ORIGIN: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): Observable<any> {
    return this.http
    .post(`${this.API_ORIGIN}/users`, {username, password})
    .pipe(catchError((error: any) => throwError(error.json())))
  }
}
