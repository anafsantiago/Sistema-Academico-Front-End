import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UnidadeCurricular} from '../../model/unidadeCurricular';

@Injectable({
  providedIn: 'root'
})
export class UnidadeCurricularService {

  private baseUrl = 'http://localhost:8080/api/unidade';

  constructor(private http: HttpClient) {}

  carregarUnidades(): Observable<UnidadeCurricular[]> {
    const url = `${this.baseUrl}/carregar-unidades`;
    return this.http.get<UnidadeCurricular[]>(url);
  }

}
