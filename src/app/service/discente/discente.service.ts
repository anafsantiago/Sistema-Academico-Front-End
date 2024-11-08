import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Discente} from '../../model/discente';

@Injectable({
  providedIn: 'root'
})
export class DiscenteService {

  private baseUrl = 'http://localhost:8080/api/discente';

  constructor(private http: HttpClient) {
  }

  carregarDiscentePorCpf(cpf: string): Observable<Discente> {
    let params = new HttpParams();
    if (cpf) {
      params = params.append('cpf', cpf);
    }
    const url = `${this.baseUrl}/carregar-discente-cpf`;
    return this.http.get<Discente>(url, {params});
  }

}
