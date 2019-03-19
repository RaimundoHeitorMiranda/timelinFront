import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './registro.model';

@Injectable()
export class RegistroService{

  constructor(private http:HttpClient){

  }

  registrar(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`http://localhost:3000/users`,usuario);
  }

}
