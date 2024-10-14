import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/api/autenticacao';

  constructor(private http: HttpClient) {}

  autenticar(login: Login): Observable<string> {
    return this.http.post(this.baseUrl, login, { responseType: 'text' });
  }

}
