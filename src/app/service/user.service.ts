import { Injectable } from '@angular/core';
import { ResponseRows } from './responseRows';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userApiUrl: string = 'http://localhost:8080/api/shop/user/';
  constructor(private http: HttpClient) { }

  getUsers():Observable<ResponseRows> {
    // now returns an Observable of Config
    return this.http.get<ResponseRows>(`${this.userApiUrl}getAll`);
  }
}
