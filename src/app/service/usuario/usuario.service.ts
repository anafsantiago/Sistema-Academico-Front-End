import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from '../../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) {}

  findUsuarioLogado(usuario: string | undefined): Observable<Usuario> {
    let params = new HttpParams();
    if (usuario) {
      params = params.append('usuario', usuario);
    }
    return this.http.get<Usuario>(`${this.baseUrl}/carregar-usuario-logado`, { params });
  }

}
