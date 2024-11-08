import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Turno} from '../../model/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  private baseUrl = 'http://localhost:8080/api/turno';

  constructor(private http: HttpClient) {}

  carregarTurnos(): Observable<Turno[]> {
    const url = `${this.baseUrl}/carregar-turnos`;
    return this.http.get<Turno[]>(url);
  }

}
