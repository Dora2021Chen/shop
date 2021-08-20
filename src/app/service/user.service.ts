import { Injectable } from '@angular/core';
import { ResponseRows } from '../model/responseRows';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ResponseRow } from '../model/responseRow';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userApiUrl: string = 'http://localhost:8080/api/shop/user/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseRows> {
    // now returns an Observable of Config
    return this.http.get<ResponseRows>(`${this.userApiUrl}getAll`);
  }

  login(): Promise<ResponseRow> {
    // now returns an Observable of Config
    let params = new HttpParams();
    params = params.append('username', 'admin');
    params = params.append('password', 'admin');
    return this.http.get<ResponseRow>(`${this.userApiUrl}login`, { params: params }).toPromise();
  }
}
