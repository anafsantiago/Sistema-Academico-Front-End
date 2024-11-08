import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TurmaUnidadeCurricular} from '../../model/turmaUnidadeCurricular';

@Injectable({
  providedIn: 'root'
})
export class TurmaUnidadeCurricularService {

  private baseUrl = 'http://localhost:8080/api/turma';

  constructor(private http: HttpClient) {
  }

  gerarCodigoTurma(siglaUnidade: string, abvTurno: string): Observable<string> {
    let params = new HttpParams()
      .set('siglaUnidadeCurricular', siglaUnidade)
      .set('abvTurno', abvTurno);
    const url = `${this.baseUrl}/gerar-codigo`;
    return this.http.get<string>(url, {params, responseType: 'text' as 'json'});
  }

  cadastrarTurma(novaTurma: TurmaUnidadeCurricular): Observable<string> {
    const url = `${this.baseUrl}/cadastrar`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<string>(url, novaTurma, {headers, responseType: 'text' as 'json'});
  }

  consolidarTurma(idTurma: number | undefined): Observable<string> {
    let params = new HttpParams();
    if (idTurma) {
      params = params.append('idTurma', idTurma);
    }
    return this.http.put<string>(`${this.baseUrl}/consolidar-turma`, {}, {params, responseType: 'text' as 'json'});
  }
}
