import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Acontecimento } from './time.model';
import { AuthService } from '../login/auth.service';


@Injectable()
export class AcontecimentoService{

  constructor(private http:HttpClient,
              private authService:AuthService){

  }

  adicionar(acontecimento:Acontecimento):Observable<Acontecimento>{
    acontecimento.userId = this.authService.usuarioLogado.id;
    return this.http.post<Acontecimento>(`http://localhost:3000/acontecimento`,acontecimento);
  }

  buscar():Observable<Acontecimento[]>{
    return this.http.get<Acontecimento[]>(`http://localhost:3000/users/${this.authService.usuarioLogado.id}/acontecimento`);
  }

  deletar(id:number):Observable<any>{
    return this.http.delete(`http://localhost:3000/acontecimento/${id}`);
  }

}
