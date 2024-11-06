import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MatriculaCurso} from '../../model/matriculaCurso';

@Injectable({
  providedIn: 'root'
})
export class MatriculaDiscenteService {

  private baseUrl = 'http://localhost:8080/api/matricula-curso';

  constructor(private http: HttpClient) {}

  carregarDadosMatriculaDiscente(idPessoa: number | undefined): Observable<MatriculaCurso> {
    let params = new HttpParams();
    if (idPessoa) {
      params = params.append('idPessoa', idPessoa);
    }
    return this.http.get<MatriculaCurso>(`${this.baseUrl}/carregar-matricula`, { params });
  }

}
