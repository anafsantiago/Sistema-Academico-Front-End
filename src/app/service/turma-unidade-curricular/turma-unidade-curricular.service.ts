import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaUnidadeCurricularService {

  private baseUrl = 'http://localhost:8080/api/turma';

  constructor(private http: HttpClient) {}

  consolidarTurma(idTurma: number | undefined): Observable<string> {
    let params = new HttpParams();
    if (idTurma) {
      params = params.append('idTurma', idTurma);
    }
    return this.http.put<string>(`${this.baseUrl}/consolidar-turma`, {}, { params, responseType: 'text' as 'json' });
  }
}
