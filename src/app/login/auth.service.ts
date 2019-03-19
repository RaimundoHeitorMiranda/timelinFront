import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from './login.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Usuario } from '../registro/registro.model';
import { API } from '../API';

@Injectable()
export class AuthService{

  // usuário logado no sistema
  usuarioLogado:Usuario;

  // flag que representa se o há alguém logado ou não
  isLoggedFlag:boolean = false;

  constructor(private http:HttpClient,
              private router:Router){
  }

  /* Método de login do sistema
  recebe com paramentro um usuário, que é então eviado ao servidor
  se tudo ocorrer bem, altera-se a flag, salva o usuário logado
  e redireciona para a pagina da linha do tempo
  */
  login(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${API}/auth`,usuario).pipe(
      map(result => {
        this.usuarioLogado = result;
        this.isLoggedFlag = true;
        this.router.navigate(['/time']);
        return result;
      })
    );
  }

  /* Método para efetuar o logout no sistema
  altera a flag,redefine o usuário e navega para a página de login
  */
  logout(){
    this.isLoggedFlag = false;
    this.usuarioLogado = undefined;
    this.router.navigate(['/login']);
  }

}
