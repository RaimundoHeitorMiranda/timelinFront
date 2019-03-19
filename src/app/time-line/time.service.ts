import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Acontecimento } from './time.model';
import { AuthService } from '../login/auth.service';
import { API } from '../API';


@Injectable()
export class AcontecimentoService{

  constructor(private http:HttpClient,
              private authService:AuthService){

  }

  adicionar(acontecimento:Acontecimento):Observable<Acontecimento>{
    acontecimento.userId = this.authService.usuarioLogado.id;
    return this.http.post<Acontecimento>(`${API}/acontecimento`,acontecimento);
  }

  buscar():Observable<Acontecimento[]>{
    return this.http.get<Acontecimento[]>(`${API}/users/${this.authService.usuarioLogado.id}/acontecimento`);
  }

  deletar(id:number):Observable<any>{
    return this.http.delete(`${API}/acontecimento/${id}`);
  }

}
