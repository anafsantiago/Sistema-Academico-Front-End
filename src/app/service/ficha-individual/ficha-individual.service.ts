import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FichaIndividualDiscente} from '../../model/fichaIndividualDiscente';

@Injectable({
  providedIn: 'root'
})
export class FichaIndividualService {

  private baseUrl = 'http://localhost:8080/api/ficha-individual';

  constructor(private http: HttpClient) {}

  gravarNotasFrequencias(fichas: FichaIndividualDiscente[]): Observable<string> {
    const url = `${this.baseUrl}/registrar-notas-frequencias`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put<string>(url, fichas, { headers, responseType: 'text' as 'json' });
  }

}
