import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AlocacaoDiscente} from '../../model/alocacaoDiscente';

@Injectable({
  providedIn: 'root'
})
export class AlocacaoDiscenteService {

  private baseUrl = 'http://localhost:8080/api/alocacao-discente';

  constructor(private http: HttpClient) {}

  carregarAlocacoesDiscente(idPessoa: number | undefined): Observable<AlocacaoDiscente[]> {
    let params = new HttpParams();
    if (idPessoa) {
      params = params.append('idPessoa', idPessoa);
    }
    return this.http.get<AlocacaoDiscente[]>(`${this.baseUrl}/carregar-alocacao`, { params });
  }

}
