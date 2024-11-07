import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Curso} from '../../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private baseUrl = 'http://localhost:8080/api/curso';

  constructor(private http: HttpClient) {}

  carregarCursoPorIdTurma(idTurma: number | undefined): Observable<Curso> {
    let params = new HttpParams();
    if (idTurma) {
      params = params.append('idTurma', idTurma);
    }
    return this.http.get<Curso>(`${this.baseUrl}/carregar-curso`, { params });
  }

}
