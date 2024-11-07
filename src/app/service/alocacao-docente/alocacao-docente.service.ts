import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AlocacaoDocente} from '../../model/alocacaoDocente';

@Injectable({
  providedIn: 'root'
})
export class AlocacaoDocenteService {

  private baseUrl = 'http://localhost:8080/api/alocacao-docente';

  constructor(private http: HttpClient) {}

  carregarAlocacoesDocente(idPessoa: number | undefined): Observable<AlocacaoDocente[]> {
    let params = new HttpParams();
    if (idPessoa) {
      params = params.append('idPessoa', idPessoa);
    }
    return this.http.get<AlocacaoDocente[]>(`${this.baseUrl}/carregar-alocacoes`, { params });
  }

}
