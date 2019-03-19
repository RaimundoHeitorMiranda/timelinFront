import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../registro/registro.model';
import { API } from '../API';

@Injectable()
export class ContaService{

  constructor(private http:HttpClient){

  }

  atualizar(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${API}/users/${usuario.id}`,usuario);
  }

}
