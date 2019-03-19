import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from './login.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Usuario } from '../registro/registro.model';

@Injectable()
export class AuthService{

  usuarioLogado:Usuario;
  isLoggedFlag:boolean = false;

  constructor(private http:HttpClient,
              private router:Router){
  }

  login(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`http://localhost:3000/auth`,usuario).pipe(
      map(result => {
        this.usuarioLogado = result;
        this.isLoggedFlag = true;
        this.router.navigate(['/time']);
        return result;
      })
    );
  }

  logout(){
    this.isLoggedFlag = false;
    this.usuarioLogado = undefined;
    this.router.navigate(['/login']);
  }

}
