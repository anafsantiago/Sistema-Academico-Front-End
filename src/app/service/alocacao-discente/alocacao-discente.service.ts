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

  carregarAlocacoesDiscentePorIdPessoa(idPessoa: number | undefined): Observable<AlocacaoDiscente[]> {
    let params = new HttpParams();
    if (idPessoa) {
      params = params.append('idPessoa', idPessoa);
    }
    return this.http.get<AlocacaoDiscente[]>(`${this.baseUrl}/carregar-alocacao`, { params });
  }

  carregarAlocacoesDiscentePorIdTurma(idTurma: number | undefined): Observable<AlocacaoDiscente[]> {
    let params = new HttpParams();
    if (idTurma) {
      params = params.append('idTurma', idTurma);
    }
    return this.http.get<AlocacaoDiscente[]>(`${this.baseUrl}/carregar-alocacoes`, { params });
  }

  cadastrarAlocacao(idDiscente: number, idTurma: number): Observable<string> {
    const params = new HttpParams()
      .set('idDiscente', idDiscente.toString())
      .set('idTurma', idTurma.toString());

    return this.http.post<string>(`${this.baseUrl}/cadastrar`, null, {
      params,
      responseType: 'text' as 'json'
    });
  }


}
