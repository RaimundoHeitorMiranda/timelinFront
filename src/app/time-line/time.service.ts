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

  /* Método para adicionar um acontecimento
  recebe um acontecimento como parametro e o envia ao servidor
  */
  adicionar(acontecimento:Acontecimento):Observable<Acontecimento>{
    // busca o id do usuário logado
    acontecimento.userId = this.authService.usuarioLogado.id;
    return this.http.post<Acontecimento>(`${API}/acontecimento`,acontecimento);
  }

  /* Método para buscar todos os acontecimentos de um usuário
  */
  buscar():Observable<Acontecimento[]>{
    return this.http.get<Acontecimento[]>(`${API}/users/${this.authService.usuarioLogado.id}/acontecimento`);
  }

  /* Método para deletar um acontecimento
  */
  deletar(id:number):Observable<any>{
    return this.http.delete(`${API}/acontecimento/${id}`);
  }

}
